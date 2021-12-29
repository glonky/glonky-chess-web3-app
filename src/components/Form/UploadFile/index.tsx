import classNames from 'classnames';
import { FieldHookConfig, useField } from 'formik';
import React, { useCallback, useState } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import Image from 'next/image';

export type UploadFileProps = FieldHookConfig<any> & {
  onHandleDrop: (files: FileList) => void;
};

export const UploadFile = (props: UploadFileProps) => {
  const [field, meta, helpers] = useField(props);
  const [selectedFile, setSelectFile] = useState<File & { preview: string }>();
  const onDropAccepted = useCallback(
    (acceptedFiles: File[]) => {
      helpers.setError(undefined);
      setSelectFile({ ...acceptedFiles[0], preview: URL.createObjectURL(acceptedFiles[0]) });
    },
    [helpers, setSelectFile],
  );

  const onDropRejected = useCallback(
    (rejectedFiles: FileRejection[]) => {
      if (rejectedFiles.length > 1) {
        helpers.setError('You can only upload one file at a time');
        return;
      }

      if (rejectedFiles.length > 0 && (rejectedFiles[0].errors ?? []).length > 0) {
        let convertedErrorMessage = '';

        switch (rejectedFiles[0].errors[0].code) {
          case 'file-too-large':
            convertedErrorMessage = 'File must be less than 100MB';
            break;
          case 'file-invalid-type':
            convertedErrorMessage = 'File must be JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF.';
            break;
          default:
            convertedErrorMessage = rejectedFiles[0].errors[0].message;
        }

        helpers.setError(convertedErrorMessage);
      }
    },
    [helpers],
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*,video/*,audio/*,webgl/*,.glb,.gltf',
    maxSize: 1000000000,
    multiple: false,
    onDropAccepted,
    onDropRejected,
  });

  return (
    <div className="sm:col-span-6">
      <label className="block text-sm font-medium dark:text-white text-gray-700" htmlFor={props.id || props.name}>
        NFT
      </label>
      <div
        className={classNames(
          'mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-white border-dashed rounded-md hover:bg-black hover:bg-opacity-25 cursor-pointer',
          // '': dragging
          // '': !dragging
        )}
        {...getRootProps()}
      >
        <div className="space-y-4 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400 dark:text-white"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex text-sm text-gray-600 dark:text-white justify-center">
            <span>Upload a file</span>
            <input type="file" className="sr-only" autoComplete="off" {...getInputProps(field)} />
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500 dark:text-white">
            JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
          </p>
        </div>
      </div>
      {meta.error && <div className="mt-2 text-red-500">{meta.error}</div>}
      {selectedFile && (
        <div className="w-16 h-16 mt-2">
          <Image src={selectedFile.preview} layout="fixed" alt="preview" width={100} height={100} />
        </div>
      )}
    </div>
  );
};

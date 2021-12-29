import { PhotographIcon } from '@heroicons/react/outline';
import { PropsWithChildren } from 'react';
import { Field } from 'formik';

export function NewNFT({ children }: PropsWithChildren<Record<string, unknown>>) {
  return (
    <Field
      type="button"
      className="relative block w-full dark:text-white border-2 border-white border-dashed rounded-lg p-12 text-center hover:border-gray-400 dark:hover:border-gray-300 dark:hover:bg-black dark:hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <PhotographIcon className="mx-auto h-12 w-12" />
      {children}
    </Field>
  );
}

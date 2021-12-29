import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Form, Formik } from 'formik';
import { UploadFile, UploadFileProps } from './index';

export default {
  component: UploadFile,
  title: 'UploadFile',
} as Meta;

const defaultTemplate: Story<UploadFileProps> = (props) => (
  <Formik
    initialValues={{ [props.name]: '' }}
    onSubmit={() => {
      console.log('hie');
    }}
  >
    <Form>
      <UploadFile {...props} />
    </Form>
  </Formik>
);

const errorTemplate: Story<UploadFileProps> = (props) => (
  <Formik
    initialValues={{ [props.name]: '' }}
    initialErrors={{ [props.name]: 'You can only upload one file at a time' }}
    onSubmit={() => {
      console.log('hie');
    }}
  >
    <Form>
      <UploadFile {...props} />
    </Form>
  </Formik>
);

export const Default = defaultTemplate.bind({});

Default.args = {
  name: 'upload-nft',
  onHandleDrop: (files) => {
    console.log(files);
  },
};

export const Error = errorTemplate.bind({});

Error.args = {
  name: 'upload-nft',
  onHandleDrop: (files) => {
    console.log(files);
  },
};

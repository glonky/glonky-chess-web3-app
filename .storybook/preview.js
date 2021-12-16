import React from 'react';
import { addDecorator } from '@storybook/react';
import Layout from './Layout';
import * as NextImage from "next/image";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const LIGHT_BACKGROUND_HEX = '#f9fafb';
const DARK_BACKGROUND_HEX = '#374151';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // layout: 'centered',
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: LIGHT_BACKGROUND_HEX,
      },
      {
        name: 'dark',
        value: DARK_BACKGROUND_HEX,
      },
    ],
  }
}


const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
      // this is new!
      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
    />
  ),
});

addDecorator((storyFn, context) => {
  const isUsingDarkMode =
    context.globals.backgrounds ? context.globals.backgrounds.value === DARK_BACKGROUND_HEX : true;

  return <Layout darkMode={isUsingDarkMode}>{storyFn()}</Layout>
});


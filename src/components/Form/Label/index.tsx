import React, { PropsWithChildren } from 'react';

export interface LabelProps {
  htmlFor: string;
}

export const Label = ({ children, htmlFor }: PropsWithChildren<LabelProps>) => {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium dark:text-white text-gray-700">
      {children}
    </label>
  );
};

import * as React from 'react';

import './Button.scss';

interface ButtonProps {
  children?: any;
  style?: string;
  size?: string;
}

export const Button: React.SFC<ButtonProps> = ({ children, style, size }) => {
  return (
    <button className={`button ${style} ${size}`}>
      { children }
    </button>
  );
};
import * as React from 'react';
import './Hamburger.scss';

interface HamburgerProps {
  clickHandler: any;
}

export const Hamburger: React.SFC<HamburgerProps> = ({ clickHandler }) => {
  // const handleClick = () => onClick();
  return (
    <div className='hamburger' onClick={clickHandler}>
      <div className='hamburger-bar' />
      <div className='hamburger-bar' />
      <div className='hamburger-bar' />
    </div>
  );
};

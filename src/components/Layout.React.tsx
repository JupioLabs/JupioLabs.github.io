import * as React from 'react';
import { Introduction } from '../components/Introduction.React';
import { Services } from '../components/Services.React';
import { Hamburger } from '../ui/Hamburger.React';
import './Layout.scss';
import { Navigation } from './Navigation.React';

interface LayoutProps {
  children?: any;
  className?: any;
}

export const Layout: React.SFC<LayoutProps> = ({ children, className }) => {

  const clickHandler = () => { return; };
  const isOpen: boolean = false;
  const openClass: string = isOpen ? 'open' : '';

  return (
    <div className={`main-container ${className}`}>
      <Navigation />
      { children }
    </div>

  );
};
import * as React from 'react';
import { SectionTitle } from '../ui/SectionTitle.React';
import './Section.scss';

interface SectionProps {
  children?: any;
  bgClass?: string;
  isFullHeight?: boolean;
}

export const Section: React.SFC<SectionProps> = ({children, bgClass, isFullHeight}) => {

  return (
    <section className={`section full-height-${!!isFullHeight}`}>
      <div className={`section-container ${bgClass}`}>
        { children }
      </div>
    </section>
  );
};
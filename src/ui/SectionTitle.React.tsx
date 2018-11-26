import * as React from 'react';
import './SectionTitle.scss';

interface SectionTitleProps {
  children: string;
}

export const SectionTitle: React.SFC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 className='section-title'>{ children }</h2>
  );
};
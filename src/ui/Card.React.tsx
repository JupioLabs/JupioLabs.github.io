import * as React from 'react';
import './Card.scss';

interface CardProps {
  children?: any;
  additionalClasses?: string;
}

export const Card: React.SFC<CardProps> = ({children, additionalClasses}) => {
  return (
    <div className={`card ${additionalClasses}`}>
      { children }
    </div>
  );
};
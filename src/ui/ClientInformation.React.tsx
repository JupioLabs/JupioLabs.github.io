import * as React from 'react';
import './ClientInformation.scss';

interface ClientInformationProps {
  image: string;
  imagePosition: string;
  stack: string[];
  name: string;
  children: any;
}

export const ClientInformation: React.SFC<ClientInformationProps> = ({ image, imagePosition, name, stack, children }) => {
  return (
   <div className={`client-info ${imagePosition}`}>
    <div className='client-info-content'>
      <div className='client-info-image'>
        <img src={image} />
      </div>
      <h3>{ name }</h3>
      <div className='client-info-stack'>
        {
          stack.map((tech, index) => {
            return (
              <span key={`stack-item-${index}`} className='client-info-technology'>{tech}</span>
            );
          })
        }
      </div>
      { children }
    </div>
   </div>
  );
};
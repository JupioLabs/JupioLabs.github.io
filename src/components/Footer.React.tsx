import * as React from 'react';
import { Card } from '../ui/Card.React';
import { Section } from '../ui/Section.React';
import { SectionTitle } from '../ui/SectionTitle.React';
import './Footer.scss';

interface FooterProps {}

export const Footer: React.SFC<FooterProps> = () => {
  return (
    <Section bgClass='footer'>
      <div className='footer-overlay'>
        <div className='footer-content'>
          <p className='footer-text'>Made with locally sourced, handcrafted, artisanal code, from a Toronto-based Company.</p>
          <p className='footer-text'>© Jupio Media Inc.</p>
        </div>
      </div>
    </Section>
  );
};
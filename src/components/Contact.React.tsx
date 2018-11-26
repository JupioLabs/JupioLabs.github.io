import * as React from 'react';
import { Card } from '../ui/Card.React';
import { Section } from '../ui/Section.React';
import { SectionTitle } from '../ui/SectionTitle.React';
import './Contact.scss';

interface ContactProps {}

export const Contact: React.SFC<ContactProps> = () => {
  return (
    <Section bgClass='contact'>
      <div className='contact-container'>
        <div className='contact-title'>
          <SectionTitle>Get in Touch</SectionTitle>
        </div>
        <div className='contact-information'>
          <Card additionalClasses='contact-card'>
            <p>
              <span className='contact-card-details'>It's easiest to reach us by email</span>
            </p>
            <p>
              <span className='contact-card-email'>
                <a href='mailto:info@jupio.media'>
                  info@jupio.media
                </a>
              </span>
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
};
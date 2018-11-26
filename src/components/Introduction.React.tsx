import * as React from 'react';
import { Section } from '../ui/Section.React';
import { SectionTitle } from '../ui/SectionTitle.React';
import './Introduction.scss';

interface IntroductionProps {}

export const Introduction: React.SFC<IntroductionProps> = () => {
  return (
    <Section bgClass='intro-background' isFullHeight={true}>
      <div className='intro-description'>
        <div className='intro-box'>
          <div className='intro-title'>
            <SectionTitle>Your Innovation Partner</SectionTitle>
          </div>
          <div className='intro-text'>
            At Jupio Labs we bring our clients to the
            modern web, using agile & lean approaches
            to development and design
          </div>
        </div>
      </div>
    </Section>
  );
};
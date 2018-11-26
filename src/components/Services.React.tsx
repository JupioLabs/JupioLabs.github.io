import * as React from 'react';
import { Card } from '../ui/Card.React';
import { Section } from '../ui/Section.React';
import { SectionTitle } from '../ui/SectionTitle.React';
import './Services.scss';

interface ServicesProps {}

export const Services: React.SFC<ServicesProps> = () => {
  return (
    <Section>
      <SectionTitle>Rome Wasn't Built in a Day</SectionTitle>
      <span className='services-subheading'>
        We help you take systematic, smaller, & smarter risks.
      </span>

      <p>
        We're strong believers in iterative development, so we
        bake that into our process.
      </p>

      <h3 className='services-subheading'>Ideation</h3>
      <p>
        The bigger our ideas, the harder we fail,
        so when we consult with you we help you form
        realistic expectations about your users,
        spec out a winning minimum viable product,
        and use that as your foundation for something
        that will be much grander.
      </p>

      <h3 className='services-subheading'>R & D</h3>
      <p>
        Keeping up with the latest tech and practices
        in a rapidly evolving web ecosystem,
        and we build products with the best
        the open source world has to offer.
      </p>

      <h3 className='services-subheading'>Testing</h3>
      <p>
        We take test driven development to heart. Heck,
        code that fails tests just can't be committed.
      </p>

      <h3 className='services-subheading'>Deploy</h3>

      <h3 className='services-subheading'>Analysis</h3>

    </Section>
  );
};
import * as React from 'react';
import { ClientInformation } from '../ui/ClientInformation.React';
import { Section } from '../ui/Section.React';
import { SectionTitle } from '../ui/SectionTitle.React';
import './PastClients.scss';

import logoLinda from '../static/img/logo-lindajeffrey.png';
import logoDocorg from '../static/img/logo-docorg.png';

interface PastClientsProps {}

export const PastClients: React.SFC<PastClientsProps> = () => {
  return (
    <Section bgClass='past-clients'>
      <div className='past-clients-container'>
        <div className='past-clients-title'>
          <SectionTitle>Past Clients</SectionTitle>
        </div>
        <div className='past-clients-information'>
          <ClientInformation
            image={logoDocorg}
            imagePosition='right'
            stack={[
              'UI Design',
              'Nationbuilder',
              'HTML5',
              'SASS',
              'Bulma',
              'Javascript',
              'Design',
            ]}
            name='Documentary Organization of Canada'
          >
            <h4>The Task</h4>
            <p>
              The Documentary Organization of Canada (DocOrg) approached us
              in late September of 2018 in order
              to bring their website redesign to completion. Much of
              the site was constructed, but they needed
              our expertise with  Nationbuilder as a platform, our design chops,
              and our experience in front end development to bring the redesign to
              a speedy and timely launch slated for the beginning of October.
            </p>

            <h4>Design & Development</h4>
            <p>
              We worked with existing thematic elements, such as colour scheme,
              as well as the flex box based CSS framework Bulma.
            </p>
            <p>
              We redesigned much of the conent layout, improved readability,
              and improved the typography of blog article pages. In addition,
              we ensured proper rendering and flow of form pages. We gave the
              website a final rundown and polished it before launch.
            </p>
            <p>
              We also provided insight into how the Nationbuilder platform works,
              what its limitations are, and how features within the system could
              be used to ensure dynamic content tied to data in back end administration.
            </p>
            <p>
              Finally, we helped DocOrg figure out how to establish a bilingual nation
              with the existing theme.
            </p>
            <h4>Hand Off & Launch</h4>
            <p>
              Jupio Labs ensured that DocOrg was ready and comfortable
              with the feature sets that were developed while working with us.
            </p>
            <p>
              Furthermore, Nationbuilder is a powerful tool with a rich set of features,
              which is why we worked closely to ensure that our client would be
              able to make the best use of what was available for the context of their
              organization.
            </p>
            <p>
              We worked closely to ensure as smooth a migration as possible for launch.
            </p>
          </ClientInformation>
          <ClientInformation
            image={logoLinda}
            imagePosition='right'
            stack={[
              'UI/UX Design',
              'ReactJS',
              'Redux',
              'NodeJS',
              'MongoDB',
              'TypeScript',
              'Server-side Rendering',
              'Test-driven development',
              'Mailchimp API',
              'Paypal',
              'Azure',
            ]}
            name='Linda Jeffrey for Mayor of Brampton'
          >
            <h4>The Task</h4>
            <p>
              The Campaign for Linda Jeffrey for Mayor of Brampton approached us
              looking for a custom solution for a campaign site.
            </p>
            <p>
              The solution needed to be able to handle volunteer signups, voter pledges,
              requests for campaign signs, and donations.
            </p>
            <h4>A Lean Team</h4>
            <p>
              Understanding the task at hand, how quick turnaround needs to be in a competitive
              campaign cycle, and being able to implement features as fast as possible, we chose to embed
              lean development and UX principles into our process.
            </p>
            <p>
              We quickly established a process to handle feature requests. There was one
              member of the team who remained the chief point of contact with the campaign
              at all times, and was able to relay and prioritize implementation of new features
              as requests came in.
            </p>
            <h4>The Stack</h4>
            <p>
              We were running lean, so we started with making sure there was a base level of
              predictability to our codebase. We chose TypeScript as our primary language due to
              its ability to catch type errors at compile time, allowing us to work faster rather
              than worry about variables coming up undefined at runtime. TypeScript was our bread & butter
              whether we were writing browser-side code, or NodeJS microservices. We also had checks and balances
              in the form of githooks that ensured linters, TypeScript compilation, and unit tests
              all gave the green light before a commit.
            </p>
            <p>
              We chose ReactJS with server-side rendering for our front end. React provides us powerful patterns and a functional
              approach to writing our view. We were able to effectively build a framework while building
              features by building our components using the Atomic UI approach -- allowing for maximum reusability. For state management,
              we deferred to Redux whenever necessary.
            </p>
            <p>
              Server side rendering (SSR) was necessary: political campaigns rely on users to share across
              a variety of platforms, and for that to occur predictably we require Facebook, Twitter, and Google's crawlers
              to be able to read static HTML served from a server. Towards this end, we used NextJS as our solution.
            </p>
          </ClientInformation>
        </div>

      </div>
    </Section>
  );
};
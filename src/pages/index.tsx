import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Introduction } from '../components/Introduction.React';
import { PastClients } from '../components/PastClients.React';
import { Contact } from '../components/Contact.React';
import { Footer } from '../components/Footer.React';
import { Layout } from '../components/Layout.React';

// import * as styles from './Index.module.scss';
import './index.scss';
import '../scss/global.scss';

import socialMediaCard from '../static/img/social-media-card.jpg';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
        description: string;
        keywords: string[];
        author: string;
        canonicalLink: string;
      },
    },
  };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
        description
        keywords
        author
        canonicalLink
      }
    }
  }
`;

export default class IndexPage extends React.Component<IndexPageProps, {}> {

  public render() {
    const {
      name,
      tagline,
      description,
      keywords,
      author,
      canonicalLink
    } = this.props.data.site.siteMetadata;
    return (
      <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <title>{name} | {tagline}</title>
            
            <link rel="canonical" href={canonicalLink} />
            <meta name="description" content={description}></meta>
            <meta name="keywords" content={keywords.join(',')} />
            <meta name="author" content={author} />
            
            <meta property="og:title" content={name} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={socialMediaCard} />
            <meta property="og:url" content={canonicalLink} />
        </Helmet>
        <Introduction />
        <PastClients />
        <Contact />
        <Footer />
        {/* <Services /> */}
      </Layout>
    );
  }
}

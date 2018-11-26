import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';

// import * as styles from './Index.module.scss';
import './index.scss';
import '../scss/global.scss';

import { Introduction } from '../components/Introduction.React';
import { PastClients } from '../components/PastClients.React';
import { Contact } from '../components/Contact.React';
import { Footer } from '../components/Footer.React';
import { Layout } from '../components/Layout.React';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
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
      }
    }
  }
`;

export default class IndexPage extends React.Component<IndexPageProps, {}> {

  public render() {
    const { name, tagline } = this.props.data.site.siteMetadata;
    return (
      <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{name}</title>
            <link rel="canonical" href="http://mysite.com/example" />
            <meta name="description" content="Free Web tutorials"></meta>
            <meta name="keywords" content="HTML,CSS,ReactJS,NodeJS,Node,React,Agile,Lean,UX,UI,ES6,JavaScript" />
            <meta name="author" content="Jupio Media Inc." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

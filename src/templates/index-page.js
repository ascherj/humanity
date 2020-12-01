import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import BlogRoll from '../components/BlogRoll';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';

import HeroImage from '../img/stock_photos/landscape2.jpg';

export const IndexPageTemplate = ({ heading, subheading, intro }) => (
  <div>
    <Hero heading={heading} subheading={subheading} image={HeroImage} />
    <section className="section">
      <div className="container">
        <div className="content">
          <Introduction intro={intro} />
          <div className="column is-12">
            <h2 className="has-text-weight-semibold is-size-2">
              Latest stories
            </h2>
            <BlogRoll />
            <div className="column is-12 has-text-centered">
              <Link className="btn" to="/blog">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  intro: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout hideNavbar>
      <IndexPageTemplate
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
        subheading
        intro
      }
    }
  }
`;

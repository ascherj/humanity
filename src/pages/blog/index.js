import React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';
import Hero2 from '../../components/Hero2';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero2
          heading="Latest Stories"
          image="/img/stock_photos/landscape1.jpg"
        />
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogTitle = "My Blog Posts"
const BlogPage = ({data}) => {
  
  const allPosts = data.allFile.nodes;
  const posts = allPosts.map(post => (
    <li key={post.name}>
      {post.name}
    </li>
  ));

  return (
    <Layout pageTitle={BlogTitle}>
      <ul>
        {posts}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
    nodes {
      name
    }
  }
  }
`;

export const Head = () => <Seo title={BlogTitle} />

export default BlogPage;
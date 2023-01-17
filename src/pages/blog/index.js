import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';

const BlogTitle = "My Blog Posts"

const BlogPage = ({data}) => {
  
  const allPosts = data.allMdx.nodes;
  console.log('allposts:', allPosts);

  const posts = allPosts.map(({ frontmatter, id }) => {
    const {title, date, slug } = frontmatter;
    return (
      <article key={id}>
        <h2>
          <Link to={`/blog/${slug}`}>
            {title}
          </Link>
        </h2>
        <p>Posted: {date}</p>
      </article>
    )
  });

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
   allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        slug
      }
      id
    }
  }
  }
`;

export const Head = () => <Seo title={BlogTitle} />

export default BlogPage;
import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../../components/layout';
import Seo from '../../components/seo';

const BlogPost = ({ data, children }) => {
  const {hero_image, hero_image_alt, date, title, hero_image_credit_link, hero_image_credit_text} = data.mdx.frontmatter;
  // the getImage function just make the string shorter: data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData
  const image = getImage(hero_image);

  return (
    <Layout pageTitle={title}>
      <p>Posted: {date}</p>
      <GatsbyImage image={image} alt={hero_image_alt} />
      <p>
        Photo Credit: {" "}
        <a href={hero_image_credit_link}>{hero_image_credit_text}</a>
      </p>
      {children}
    </Layout>
  );
}
// Syntax Hint: You might have noticed that there’s a {" "} after the “Photo Credit:” text <p> tag. 
// That’s to make sure that a space gets rendered between the colon (:) and the link text.
export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

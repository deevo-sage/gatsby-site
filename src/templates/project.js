import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import analytics from '../components/fireanalytics';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        link
      }
      body
    } 
  }
`;

const ProjectTemplate = ({ data: { mdx: post } }) => {
  useEffect(() => {
    analytics('visited_'+post.frontmatter.title);
  },);
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p style={{ fontSize: '0.75rem' }}>Posted by {post.frontmatter.author}</p>
      {/* <Styleda
        href={post.frontmatter.link}
        css={css`
          display: inline-block;
          font-size: 0.875rem;
          color: #0fa3b1;
          :visited {  
            color: #8b3e98;
          }
        `}
        
      >
        Visit the Project &rarr;
      </Styleda> */}
      <MDXRenderer>{post.body}</MDXRenderer>

      <ReadLink cover direction="up" duration={1} to="/about/">
        &larr; back to about
      </ReadLink>
    </Layout>
  );
};

export default ProjectTemplate;

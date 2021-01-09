import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import analytics from '../components/fireanalytics';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import { MDXRenderer } from 'gatsby-plugin-mdx';
export const query = graphql`
         query($slug: String!) {
           mdx(frontmatter: { slug: { eq: $slug } }) {
             frontmatter {
               title
               author
               date
               description
             }
             body
           }
         }
       `;

const PostTemplate = ({ data: {mdx:post} }) => {
    useEffect(() => {
      analytics('visited_' + post.frontmatter.title);
    });
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{post.frontmatter.title}</title>
        <meta name="description" content={post.frontmatter.description} />
      </Helmet>
      <Layout>
        <h1>{post.frontmatter.title}</h1>
        <p style={{ fontSize: '0.75rem' }}>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </p>
        <MDXRenderer>{post.body}</MDXRenderer>

        <ReadLink cover direction="up" duration={1} to="/">
          &larr; back to posts
        </ReadLink>
      </Layout>
    </>
  );
};

export default PostTemplate;

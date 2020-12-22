import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import Hero from '../components/hero';

export default () => {
  const posts = usePosts();
  
  return (
    <>  <Hero />
      <Layout>
      

        <h2
          css={css`
            widht: 100%;
            text-align: center;
          `}
        >
          {' '}
          Read my blog
        </h2>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            @media only screen and (max-width: 550px) {
              justify-content: space-around;
            }
            width: 100%;
          `}
        >
          {posts.map(post => (
            <PostPreview key={post.slug} post={post}></PostPreview>
          ))}
        </div>
      </Layout>
    </>
  );
};

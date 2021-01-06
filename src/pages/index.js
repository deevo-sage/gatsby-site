import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import Hero from '../components/hero';
import { Tween } from 'react-gsap';
export default () => {
  const posts = usePosts();

  return (
    <>
      {' '}
      <Hero />
      <Layout>
        <h2
          css={css`
            widht: 100%;
            text-align: center;
          `}
        >
          {' '}
          🙃 Read my blogs 🙃
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
          <Tween
            from={{ x: '100px', y: '100px', opacity: 0 }}
            duration={0.7}
            stagger={0.3}
            playState="true"
          >
            {posts.map(post => (
              <div
                css={css`
                  margin: 0;
                  padding: 0;
                  min-height: 250px;
                  width: 30%;
                  margin-top: 0.5rem;
                  margin-bottom: 0.5rem;
                  @media only screen and (min-width: 550px) {
                    margin-right: 3.3%;
                  }
                  @media only screen and (max-width: 550px) {
                    min-height: 33vh;
                    width: 80%;
                    box-shadow: 2.75px 2.75px 6px #000000;
                  }
                `}
                key={post.slug}
              >
                <PostPreview post={post}></PostPreview>
              </div>
            ))}
          </Tween>
        </div>
      </Layout>
    </>
  );
};

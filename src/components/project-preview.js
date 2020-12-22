import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import ReadLink from './read-link';
import Image from 'gatsby-image';
const ProjectPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      padding-bottom: 1rem;
      display: flex;
      flex-direction: column;
      width: 30%;
      min-height: 250px;
      box-shadow: 4px 4px 6px #000000;
      padding-top: 0;
      margin-top: 1rem;
      @media only screen and (min-width: 550px) {
        margin-right: 3.3%;
      }
      @media only screen and (max-width: 550px) {
        min-height: 33vh;
        width: 80%;
        box-shadow: 2.75px 2.75px 6px #000000;
      }
    `}
  >
    <Link
      to={'../' + post.slug}
      css={css`
        margin: 0 1rem 0 0;
        width: 100%;
        height: 150px;
      `}
    >
      <Image
        fluid={post.image.sharp.fluid}
        fadeIn="soft"
        css={css`
            background-position: top 20% center;
            
            height:100%;
            display:flex:
          * {
            margin: 0;
          }
          
          alt={post.title}
        `}
      ></Image>
    </Link>
    <div
      css={css`
        height: 50%;
        width: 100%;
        display: flex;
        justift-content: flex-start;
        align-items: center;
        flex-direction: column;
        padding-top: 5px;
      `}
    >
      <h6
        css={css`
          color: #e0777d;
        `}
      >
        {post.topic}
      </h6>
      <h4
        css={css`
          width: 100%;
          padding-left: 23px;
          padding-right: 23px;
          text-align: center;

          @media only screen and (max-width: 550px) {
            padding-left: 15%;
            font-size: 1.15em;
            padding-right: 15%;
          }
        `}
      >
        <Link
          to={'../' + post.slug}
          css={css`
            width: 100%;
            text-decoration: none;
            color: black;
            :hover {
              text-decoration: underline;
            }
          `}
        >
          {post.title}
        </Link>
      </h4>
      <ReadLink to={'../' + post.slug}>read now &rarr;</ReadLink>
    </div>
  </article>
);

export default ProjectPreview;

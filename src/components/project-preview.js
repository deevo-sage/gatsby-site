import React from 'react';
import { css } from '@emotion/core';
import ReadLink from './read-link';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Image from 'gatsby-image';
const duration = 0.75;
const ProjectPreview = ({ post }) => {
  return (
    <article
      id="project-preview"
      css={css`
        padding-bottom: 1rem;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        min-height: 250px;
        box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.35);
        padding-top: 0;
        @media only screen and (min-width: 550px) {
          margin-right: 3.3%;
        }
      `}
    >
      <AniLink
        hex="#303633"
        paintDrip
        direction="up"
        duration={duration}
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
      </AniLink>
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
          <AniLink
            hex="#303633"
            paintDrip
            direction="up"
            duration={duration}
            to={'../' + post.slug}
            className="projectheader"
          >
            {post.title}
          </AniLink>
        </h4>
        <ReadLink
          paintDrip
          direction="up"
          duration={duration}
          to={'../' + post.slug}
        >
          read now &rarr;
        </ReadLink>
      </div>
    </article>
  );
};

export default ProjectPreview;

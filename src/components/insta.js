import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import useInstagram from '../hooks/use-insta';
const Insta = () => {
  const instaphotos = useInstagram();
  return (
    <>
      <h2>Insta posts from @sidharthhsahni</h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          margin: 1rem;
        `}
      >
        {instaphotos.map(photo => {
          return (
            <a
              key={photo.id}
              href={`https://instagram.com/p/${photo.id}`}
              css={css`
                box-shadow: 0;
                display: block;
                margin: 0.5rem;
                max-width: calc(33%-1rem);
                width: 120px;
                trasition: 200ms box-shadow linear;
                :focus,
                :hover {
                  box-shadow: 0 2px 14px #22222244;
                  z-index: 10;
                }
              `}
            >
              <Image
                fluid={photo.fluid}
                alt={photo.caption}
                css={css`
                  width: 100%;
                  display: flex;
                  justify-content: center;
                  align-itmes: center;
                  * {
                    margin-top: 0;
                  }
                `}
              />
            </a>
          );
        })}
      </div>
      <a href={'https://instagram.com/sidharthhsahni'}>
        see more at my instagram &rarr;
      </a>
    </>
  );
};
export default Insta;

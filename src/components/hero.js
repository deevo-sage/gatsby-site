import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Background from 'gatsby-background-image';
const ImageBackground = styled(Background)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;
  margin: 0;
  margin-top: 0;
  padding-top: 0;
  + * {
    margin-top: 0;
  }
  @media only screen and (max-width: 550px) {
    height: 40vh;
  }
`;

const Textbox = styled('div')`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
    color:black;
  }
  p,
  a {
    color: #222;
    margin-top: 0.5rem;
  }
`;
const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "city.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <ImageBackground Tag="div" fluid={image.sharp.fluid} fadeIn="soft">
      <Textbox>
        <h1>Welcome to my blogsite</h1>
        <p>
          {' '}
          will be posting coding related stuff obvi 
          <span role="img" aria-label="computer">
            💻💻
          </span>
        </p>
      </Textbox>
    </ImageBackground>
  );
};
export default Hero;

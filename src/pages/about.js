import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import Insta from '../components/insta';
import useProjects from '../hooks/use-projects';
import ProjectPreview from '../components/project-preview';
import ReadLink, { Styleda } from '../components/read-link';
const About = () => {
  const projects = useProjects();
  return (
    <Layout>
      <p
        css={css`
          font-size: 0.7em;
          color: gray;
        `}
      >
        This is not supposed to be a portfolio website. All the details are
        mentioned here until i finish working on the *Portfolio Site*.
      </p>
      <h1>About Me 👨‍🎓</h1>
      <p>
        I'm Sidharth Sahni, a self-taught web and app developer working with React and
        React-native for the front-end and Firebase for the backend. Currently,
        I'm a second Year student at{' '}
       <Styleda
          href="http://bpitindia.com/"
          css={css`
            text-decoration: none;
          `}
        >
          Bhagwan Parshuram Institute of Technology
        </Styleda>{' '}
        while also learning and working with various new frameworks and
        technologies in my free time.
      </p>

      <h1>My Past Projects</h1>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          margin-bottom: 2rem;
          @media only screen and (max-width: 550px) {
            justify-content: space-around;
          }
          width: 100%;
        `}
      >
        {projects.map(project => (
          <ProjectPreview post={project} />
        ))}
      </div>
      <br />
      <ReadLink cover direction="up" duration={1} to="/">
        &larr; back to home
      </ReadLink>
    </Layout>
  );
};

export default About;

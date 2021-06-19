import React, { useEffect } from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import useProjects from '../hooks/use-projects';
import ProjectPreview from '../components/project-preview';
import ReadLink, { Styleda } from '../components/read-link';
import { Tween } from 'react-gsap';
import analytics from '../components/fireanalytics';
import Helmet from 'react-helmet';

const About = () => {
  useEffect(() => {
    analytics('visited_about_us');
  }, []);
  const projects = useProjects();
  return (
    <>
      <Helmet>
        <title>About me</title>
        <meta
          name="description"
          content="I’m Sidharth Sahni, a 2nd Year Btech IT student who's just
          passionate about learning & building stuff. I usually work with GraphQL + Mongo + React
          but i also do with MERN stack.I absolutely love to work on frameworks that I've
          never worked with before as it is the best oppurtunity to learn."
        />
      </Helmet>

      <Layout>
        <h1>
          About Me
          <span role="img" aria-label="student">
            👨‍🎓
          </span>
        </h1>
        <p>
          I’m Sidharth Sahni, a 2nd Year Btech IT student who's just passionate
          about learning & building stuff. I usually work with GraphQL + Mongo +
          React but i also do with MERN stack.I absolutely love to work on
          frameworks that I've never worked with before as it is the best
          oppurtunity to learn.
          {/* <Styleda
            href="http://bpitindia.com/"
            css={css`
              text-decoration: none;
            `}
          >
            Bhagwan Parshuram Institute of Technology
          </Styleda>{' '}
          while also learning and working with various new frameworks and
          technologies in my free time. */}
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
          {' '}
          <Tween
            from={{ x: '100px', y: '100px', opacity: 0 }}
            duration={0.7}
            stagger={0.3}
            playState="true"
          >
            {projects.map(project => (
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
                key={project.slug}
              >
                <ProjectPreview post={project} />
              </div>
            ))}
          </Tween>
        </div>
        <br />
      </Layout>
    </>
  );
};

export default About;

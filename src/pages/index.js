import React, { useEffect } from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import useProjects from '../hooks/use-projects';
import ProjectPreview from '../components/project-preview';
import analytics from '../components/fireanalytics';
import Helmet from 'react-helmet';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Text } from '@chakra-ui/layout';

const About = () => {
  useEffect(() => {
    analytics('visited_about_us');
  }, []);
  const projects = useProjects();

  return (
    <>
      <Helmet>
        <title>Hi, I'm Sidharth Sahni </title>
        <meta name="title" content="Hi, I'm Sidharth Sahni" />
        <meta
          name="description"
          content="
Hey everyone, this is just a blog site that i built to learn Gatsby.js and people confuse it wih a portfolio(I don't have one...OK I'll make 1 soon OwO)
index, follow"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sidharthsahni.com/" />
        <meta property="og:title" content="Hi, I'm Sidharth Sahni " />
        <meta
          property="og:description"
          content="
Hey everyone, this is just a blog site that i built to learn Gatsby.js and people confuse it wih a portfolio(I don't have one...OK I'll make 1 soon OwO)
index, follow"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/gastby-blog.appspot.com/o/sidharth%2FmetaImages%2F1612073750851.jfif?alt=media&token=91b64419-fc24-4758-a206-9af4ff2b5056"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Hi, I'm Sidharth Sahni " />
        <meta
          property="twitter:description"
          content="
Hey everyone, this is just a blog site that i built to learn Gatsby.js and people confuse it wih a portfolio(I don't have one...OK I'll make 1 soon OwO)
index, follow"
        />
        <meta
          property="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/gastby-blog.appspot.com/o/sidharth%2FmetaImages%2F1612073750851.jfif?alt=media&token=91b64419-fc24-4758-a206-9af4ff2b5056"
        />
      </Helmet>
      <Layout>
        <Text fontSize="xl" fontWeight="bold">
          About Me
          <span role="img" aria-label="student">
            👨‍🎓
          </span>
        </Text>
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
          {projects.map(project => (
            <Pview key={project.slug} project={project} />
          ))}
        </div>
        <br />
      </Layout>
    </>
  );
};
export const popout = {
  hidden: {
    opacity: 0,
    x: '100px',
    y: '100px',
  },
  visible: {
    x: 0,
    y: 0,
    opacity: [0, 1],
  },
};
const Pview = ({ project }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div
      ref={ref}
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
    >
      {inView ? (
        <motion.div
          transition={{
            duration: 0.4,
          }}
          initial="hidden"
          animate="visible"
          variants={popout}
          style={{ width: '100%', height: '100%' }}
        >
          <ProjectPreview post={project} />
        </motion.div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default About;

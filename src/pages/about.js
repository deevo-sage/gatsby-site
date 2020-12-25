import React from 'react';
import { Link } from 'gatsby';
import {css} from "@emotion/core"
import Layout from '../components/layout';
import Insta from '../components/insta';
import useProjects from '../hooks/use-projects';
import ProjectPreview from '../components/project-preview';
const About = () => {
  const projects=useProjects();
  return (
    <Layout>
      <h1>About Me</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        
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
<Insta/>
      <Link to="/">&larr; back to home</Link>
    </Layout>
  );
};

export default About;

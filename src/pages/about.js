import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Insta from '../components/insta';

const About = () => (
  <Layout>
    <h1>About Me</h1>
    <p>This is my personal website.</p>
    <Link to="/">&larr; back to home</Link>
    <Insta/>
  </Layout>
); 

export default About;

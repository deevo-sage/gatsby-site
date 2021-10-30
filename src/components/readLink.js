import React from 'react';
import styled from '@emotion/styled';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const ReadLinka = styled(AniLink)`
  display: inline-block;
  font-size: 0.875rem;
  color: #0fa3b1;
  :visited {
    color: #8b3e98;
  }
`;
const duration = 0.75;
const ReadLink = ({ to, children, activeClassName, className }) => (
  <ReadLinka
    hex="#303633"
    paintDrip
    direction="up"
    duration={duration}
    to={to}
    className={className}
    activeClassName={activeClassName}
  >
    {children}
  </ReadLinka>
);
export const Styleda = styled('a')`
  display: inline-block;
  font-size: 0.875rem;
  color: #0fa3b1;
  :visited {
    color: #8b3e98;
  }
`;

export const FooterLink = styled('a')`
  > svg {
    fill: white;
    transition: 0.5s;
  }
  > svg:hover {
    fill: #e0777d;
  }
`;

export default ReadLink;

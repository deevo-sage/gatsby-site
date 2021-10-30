import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from '@emotion/styled/base';
const NavLink = styled(AniLink)`
  color: white;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  text-decoration: none;
  text-align: center;
  &.current-page {
    border-bottom: 2px solid white;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;
const duration = 0.75;
export const MyLink = ({ to, children, activeClassName }) => (
  <NavLink
    hex="#303633"
    paintDrip
    direction="up"
    duration={duration}
    to={to}
    activeClassName={activeClassName}
  >
    {children}
  </NavLink>
);

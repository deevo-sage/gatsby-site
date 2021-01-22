import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Themecontext from '../contexts/theme';
import Navbutton from './navbutton';
import { Sun, Moon } from './svgs';


const pages = [
  { name: 'Blogs', slug: '/' },
  { name: 'About me', slug: '/about/' },
];
const Links = () => {
  return (
    <>
      {pages.map(item => (
        <NavLink
          cover
          direction="up"
          duration={1}
          to={item.slug}
          activeClassName="current-page"
        >
          {item.name}
        </NavLink>
      ))}
    </>
  );
};

const Header = () => {
  const [menu, setmenu] = useState(false);
  const [theme, settheme] = useContext(Themecontext);

  const Sidenav = () => (
      <div
        style={{ transition: '500ms' }}
        className={`normal ${menu? 'animation':'switch'} `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            width: 100%;
            height: 100%;
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: flex-end;
              width: 100%;
              height: 20px;
              padding: 10px;
            `}
          ></div>
          <nav
            css={css`
              margin-top: 0;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100%;
              width: 100%;
            `}
          >
            <Links />
          </nav>
        </div>
      </div>
  );

  let ww;
  if (typeof window !== `undefined`) {
    ww = window.innerWidth;
  } else ww = 500;
  return (
    <header
      css={css`
        position: fixed;
        top: 0;
        z-index: 10;
        width: 100vw;
        background: #303633;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem calc((100vw - 750px - 0.5rem) / 2);

        .normal {
          position: fixed;
          top: 0;
          right: 0;
          background: #303633;
          z-index: 10;
          overflow: hidden;
          transition: 1s;
          -webkit-transition: opacity 600ms, visibility 600ms;
          transition: opacity 600ms, visibility 600ms;
          height: 100vh;
          width: 200px;
        }

        @keyframes fadein {
          from {
            visibility: hidden;
            opacity: 0;
          }
          to {
            visibility: visible;
            opacity: 1;
          }
        }
        @keyframes fadeout {
          from {
            opacity: 1;

            }
          to {
            opacity: 0;
            visibility: hidden;
          }
        }
        .switch {
          animation: fadeout 0.75s 1 ease-out;
          animation-fill-mode: forwards;
        }
        .animation {
          visibility: visible;
          animation: fadein 0.75s 1;
          animation-fill-mode: forwards;
        }
      `}
    >
      <NavLink cover direction="up" duration={1} to="/" fontWeight="bold">
        Justcausetech
      </NavLink>
      {ww > 550 && (
        <nav
          css={css`
            margin-top: 0;
          `}
        >
          <Links />
        </nav>
      )}
      {ww < 550 && (
        <nav
          css={css`
            margin-top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <div
            to="/"
            css={css`
              padding-right: 10px;
              display: flex;
              justify-content: center;
              align-items: center;
            `}
            onClick={() => {
              if (theme === 'dark') settheme('light');
              else settheme('dark');
            }}
          >
            {theme === 'dark' && <Sun />}
            {theme === 'light' && <Moon />}
          </div>
          <div
            to="/"
            css={css`
              padding-right: 10px;
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 100;
            `}
            onClick={() => {
              setmenu(!menu);
            }}
          >
            <Navbutton />
          </div>
        </nav>
      )}
      <Sidenav />
    </header>
  );
};

const NavLink = styled(AniLink)`
  color: white;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid white;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export default Header;

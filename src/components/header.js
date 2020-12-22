import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
const Sidenav = ({ menu, setmenu }) => {
  return (
    <div
      css={css`
        position: fixed;
        display: fixed;
        top: 0;
        right: 0;
        background: #303633;
        height: 100vh;
        width: 200px;
        z-index: 10;
      `}
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
          onClick={() => {
            setmenu(!menu);
          }}
        >
          <Cross />
        </div>
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
          <NavLink
            to="/"
            activeClassName="current-page"
            css={css`
              margin: 10px;
            `}
          >
            Home
          </NavLink>
          <NavLink
            to="/about/"
            activeClassName="current-page"
            css={css`
              margin: 10px;
            `}
          >
            About
          </NavLink>
          <NavLink
            to="/contact/"
            activeClassName="current-page"
            css={css`
              margin: 10px;
            `}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

const Bars = () => {
  return (
    <svg
      width={'1.5rem'}
      height={'1.32rem'}
      viewBox="0 0 79 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.5625 4.29688C0.5625 3.19042 1.00204 2.12929 1.78441 1.34691C2.56679 0.564535 3.62792 0.125 4.73438 0.125H74.2656C74.8135 0.125 75.356 0.232908 75.8621 0.442565C76.3683 0.652221 76.8282 0.959519 77.2156 1.34691C77.603 1.73431 77.9103 2.19421 78.1199 2.70037C78.3296 3.20652 78.4375 3.74902 78.4375 4.29688C78.4375 4.84473 78.3296 5.38723 78.1199 5.89338C77.9103 6.39954 77.603 6.85944 77.2156 7.24684C76.8282 7.63423 76.3683 7.94153 75.8621 8.15119C75.356 8.36084 74.8135 8.46875 74.2656 8.46875H4.73438C3.62792 8.46875 2.56679 8.02921 1.78441 7.24684C1.00204 6.46446 0.5625 5.40333 0.5625 4.29688ZM0.5625 32.1094C0.5625 31.0029 1.00204 29.9418 1.78441 29.1594C2.56679 28.377 3.62792 27.9375 4.73438 27.9375H74.2656C75.3721 27.9375 76.4332 28.377 77.2156 29.1594C77.998 29.9418 78.4375 31.0029 78.4375 32.1094C78.4375 33.2158 77.998 34.277 77.2156 35.0593C76.4332 35.8417 75.3721 36.2812 74.2656 36.2812H4.73438C3.62792 36.2812 2.56679 35.8417 1.78441 35.0593C1.00204 34.277 0.5625 33.2158 0.5625 32.1094ZM4.73438 55.75C3.62792 55.75 2.56679 56.1895 1.78441 56.9719C1.00204 57.7543 0.5625 58.8154 0.5625 59.9219C0.5625 61.0283 1.00204 62.0895 1.78441 62.8718C2.56679 63.6542 3.62792 64.0938 4.73438 64.0938H74.2656C75.3721 64.0938 76.4332 63.6542 77.2156 62.8718C77.998 62.0895 78.4375 61.0283 78.4375 59.9219C78.4375 58.8154 77.998 57.7543 77.2156 56.9719C76.4332 56.1895 75.3721 55.75 74.2656 55.75H4.73438Z"
        fill="white"
      />
    </svg>
  );
};

const Cross = () => (
  <svg
    width={'1.5rem'}
    height={'1.32rem'}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.36 15.78L7.99997 9.41L1.63997 15.78L0.219971 14.36L6.58997 8L0.219971 1.64L1.63997 0.219999L7.99997 6.59L14.36 0.23L15.77 1.64L9.40997 8L15.77 14.36L14.36 15.78Z"
      fill="white"
    />
  </svg>
);
const NavLink = styled(Link)`
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

const Header = () => {
  const [menu, setmenu] = useState(false);
  let ww;
  if (typeof window !== `undefined`) {
    ww = window.innerWidth;
  } else ww = 500;
  return (
    <header
      css={css`
        background: #303633;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem calc((100vw - 750px - 0.5rem) / 2);
      `}
    >
      <NavLink to="/" fontWeight="bold">
        Practice Blogspot
      </NavLink>
      {ww > 550 && (
        <nav
          css={css`
            margin-top: 0;
          `}
        >
          <NavLink to="/" activeClassName="current-page">
            Home
          </NavLink>
          <NavLink to="/about/" activeClassName="current-page">
            About
          </NavLink>
          <NavLink to="/contact/" activeClassName="current-page">
            Contact
          </NavLink>
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
              setmenu(!menu);
            }}
          >
           <Bars /> 
          </div>
        </nav>
      )}
      {menu && <Sidenav menu={menu} setmenu={setmenu} />}
    </header>
  );
};
export default Header;

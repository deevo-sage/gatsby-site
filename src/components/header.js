import React, { useContext, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Themecontext from '../contexts/theme';
import Navbutton from './navbutton';
import { Sun, Moon } from './svgs';
import { SwipeableDrawer, Button, Toolbar } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Home } from '@material-ui/icons';
import zIndex from '@material-ui/core/styles/zIndex';
const duration = 0.75;
const pages = [
  { name: 'Blogs', slug: '/' },
  { name: 'About me', slug: '/about/' },
];
const Links = () => {
  return (
    <>
      {pages.map(item => (
        <Button>
          <NavLink
            cover
            direction="up"
            duration={duration}
            to={item.slug}
            activeClassName="current-page"
          >
            {item.name}
          </NavLink>
        </Button>
      ))}
    </>
  );
};
const Sidenav = ({ menu }) => {
  const [menuin, setmenuin] = useState(null);

  useEffect(() => {
    setmenuin(menu);
  }, [menu]);
  return (
    <div
      style={{ transition: '500ms' }}
      className={`normal ${menuin && menuin != null ? 'animation' : 'switch'} `}
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
};
const Header = () => {
  const [menu, setmenu] = useState(false);
  const [theme, settheme] = useContext(Themecontext);
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const tham = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  let ww;
  if (typeof window !== `undefined`) {
    ww = window.innerWidth;
  } else ww = 500;
  return (
    <header
      css={css`
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
            visibility: hidden;
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
            <Navbutton menu={menu} />
          </div>
        </nav>
      )}
      {/* <Sidenav menu={menu} /> */}

      <ThemeProvider theme={tham}>
        <SwipeableDrawer
          zIndex="modal"
          color="primary"
          anchor="right"
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          open={menu}
          onOpen={() => setmenu(!menu)}
          onClose={() => setmenu(!menu)}
          style={{ zIndex: 10 }}
          className={classes.drawer}
          classes={classes.drawer}
        >
          <Button>
            <NavLink
              paintDrip
              direction="up"
              hex="#303633"
              duration={duration}
              to="/"
              onClick={() => setmenu(!menu)}
            >
              Home
            </NavLink>
          </Button>
          <Button>
            <NavLink
              hex="#303633"
              paintDrip
              direction="up"
              duration={duration}
              to="/about/"
              style={{}}
              onClick={() => setmenu(!menu)}
            >
              About me
            </NavLink>
          </Button>
        </SwipeableDrawer>
      </ThemeProvider>
    </header>
  );
};
const ani = 'paintdrip';
const classes = makeStyles({
  drawer: {
    zIndex: 10,
  },
});
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

export default Header;

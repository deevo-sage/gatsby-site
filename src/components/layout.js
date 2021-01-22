import React, { useState, useEffect } from 'react';
import { Global, css } from '@emotion/core';
import Header from './header';
import Helmet from 'react-helmet';
import Footer from './footer';
import { Sun, Moon, Twitter } from './svgs';

import Theme from '../contexts/theme';
require('./app.css');
const Layout = ({ children }) => {
  const [themeval, setthemeval] = useState('dark');
  const [color, setcolor] = useState('white');
  const [textcolor, settextcolor] = useState('black');
  let currenturl = '';
  const Share = () => (
    <svg
      width="1.5rem"
      height="0.75rem"
      viewBox="0 0 21 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.00301 2.70265V0.666647C9.00297 0.534813 8.94429 0.405948 8.83441 0.296341C8.72453 0.186734 8.56836 0.101308 8.38566 0.0508614C8.20296 0.000414704 8.00193 -0.0127873 7.80798 0.0129244C7.61402 0.0386361 7.43586 0.102107 7.29601 0.195313L0.296009 4.86198C0.203063 4.92384 0.129325 4.99731 0.0790145 5.07818C0.0287038 5.15906 0.00280762 5.24576 0.00280762 5.33331C0.00280762 5.42087 0.0287038 5.50757 0.0790145 5.58844C0.129325 5.66932 0.203063 5.74279 0.296009 5.80465L7.29601 10.4713C7.43567 10.5648 7.61387 10.6286 7.80799 10.6545C8.0021 10.6804 8.20338 10.6673 8.38628 10.6168C8.56918 10.5663 8.72545 10.4807 8.83525 10.3709C8.94506 10.261 9.00345 10.132 9.00301 9.99998V7.93598C9.28701 7.92265 9.56801 7.91665 9.84601 7.91665C15.272 7.91665 18.085 10.298 18.208 10.4033C18.3341 10.5145 18.5094 10.5964 18.7092 10.6374C18.9089 10.6784 19.123 10.6765 19.321 10.632C19.5197 10.5876 19.6924 10.5026 19.8148 10.3892C19.9371 10.2758 20.003 10.1397 20.003 9.99998C20.003 3.91731 11.917 2.87931 9.00301 2.70265V2.70265ZM9.84601 6.58331C9.19901 6.58331 8.53401 6.61331 7.87101 6.67198C7.63074 6.69345 7.41032 6.77233 7.25068 6.89395C7.09104 7.01558 7.00304 7.1717 7.00301 7.33331V8.39065L2.41701 5.33331L7.00301 2.27598V3.33331C7.00301 3.70131 7.47401 3.99998 8.02501 3.99998C8.93501 3.99998 16.139 4.13398 17.704 8.28331C16.05 7.47131 13.423 6.58331 9.84601 6.58331Z"
        fill={themeval === 'dark' ? 'white' : 'black'}
      />
    </svg>
  );
  if (typeof window !== `undefined`) currenturl = window.location.href;

  const setColorMode = value => {
    setthemeval(value);
    if (typeof window !== `undefined`)
      window.localStorage.setItem('color-mode', value);
  };
  useEffect(() => {
    themeval === 'light' ? setcolor('#f7f7f7') : setcolor('#303633');
    themeval === 'light' ? settextcolor('#2D353C') : settextcolor('#c9c9db');
  }, [themeval]);
  useEffect(() => {
    if (typeof window !== `undefined`) {
      if (window.localStorage.getItem('color-mode') === 'light') {
        setColorMode('light');
      } else setColorMode('dark');
    } else setColorMode('dark');
  }, []);

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }
.projectheader{
   width: 100%;

              text-decoration: none;
              color: ${textcolor};
              :hover {
                text-decoration: underline;
              }
}
          /* More info: https://bit.ly/2PsCnzk */

          html,
          body {
            margin: 0;
            color: ${textcolor};
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
            font-size: 18px;
            line-height: 1.4;
            background:${color};
            /* remove margin for the main div that Gatsby mounts into */
            > div {
              margin-top: 0;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color:${textcolor}
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }

.read-link{
    display: inline-block;
  font-size: 0.875rem;
  color: #0fa3b1;
  :visited {
    color: #8b3e98;
  }
}
          strong {
            color:${textcolor};
          }

          li {
            margin-top: 0.25rem;
          }
          .code-block{
            background-color:#e5e5e8;
            border-radius:10px;
          color:black;
          padding-left:0.3rem;
          padding-right:0.3rem;
          font-size:0.8rem;
             word-wrap: break-word;      /* IE 5.5-7 */
         white-space: -moz-pre-wrap; /* Firefox 1.0-2.0 */
      white-space: pre-wrap;   
          }
          .Mdxcontainer{
            padding-left:0.3rem;
            padding-right:0.3rem;

          }
          .youtube{
            display:flex;
            justify-content:center;
            align-items:center;
            width:100%;
          }
          .youtube-vid{
width:100%;
max-width:550px;  
          }
        `}
      />
      <Helmet>
        <html lang="en" />

        <script
          data-ad-client="ca-pub-3445418722858710"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Helmet>
      <Theme.Provider value={[themeval, setthemeval]}>
        <Header />
        <main
          css={css`
            margin: 2rem auto;
            max-width: 800px;
            @media only screen and (max-width: 550px) {
              padding-left: 4px;
              padding-right: 4px;
              paddin-bottom: 2rem;
            }
          `}
        >
          <aside
            css={css`
              height: 300px;
              z-index: 100;
              padding-right: 1rem;
              right: 5px;
              top: 30%;
              float: right;
              position: fixed;

              @media only screen and (max-width: 800px) {
                right: 0px;
              }

              @media only screen and (max-width: 550px) {
                display: none;
              }
            `}
          >
            <div
              css={css`
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
              `}
            >
              <span
                onClick={() => {
                  document.execCommand('Copy');
                  if (typeof window !== `undefined`)
                    window.alert('URL: ' + currenturl + ' copied');
                }}
              >
                <textarea
                  css={css`
                    height: 0;
                    width: 0;
                    overlflow: hidden;
                    resize: none;
                    border: none;
                    background: none;
                    user-select: none;
                  `}
                  id="url"
                >
                  {currenturl}
                </textarea>
                <Share />
              </span>

              <span
                onClick={() => {
                  if (typeof window !== `undefined`)
                    window.open(
                      `https://twitter.com/intent/tweet?url=${currenturl}&text=here is an interesting blog I found`,
                    );
                }}
              >
                <Twitter />
              </span>
              <span
                onClick={() => {
                  if (themeval === 'dark') setColorMode('light');
                  else setColorMode('dark');
                }}
              >
                {themeval === 'dark' ? <Sun /> : <Moon />}
              </span>
            </div>
          </aside>
          {children}
        </main>

        <Footer />
      </Theme.Provider>
    </>
  );
};

export default Layout;

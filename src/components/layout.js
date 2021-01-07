import React, { useState, useEffect } from 'react';
import { Global, css } from '@emotion/core';
import Header from './header';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';
import Footer from './footer';
import Theme from '../contexts/theme';
const Layout = ({ children }) => {
  const colormode = 'light';
  if (typeof window !== `undefined`)
    colormode = window.localStorage.getItem('color-mode');

  const { title, description } = useSiteMetadata();
  const [themeval, setthemeval] = useState(colormode);
  const [color, setcolor] = useState('white');
  const [textcolor, settextcolor] = useState('black');
  let currenturl = '';
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
      if (window.localStorage.getItem('color-mode')) {
      } else setColorMode('light');
    }
  }, []);
  const Twitter = () => (
    <svg
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 1.97344C13.0219 2.17969 12.5016 2.32813 11.9656 2.38594C12.5221 2.05537 12.9387 1.53313 13.1375 0.917194C12.6154 1.2278 12.0434 1.44561 11.4469 1.56094C11.1976 1.29442 10.8961 1.0821 10.5611 0.937206C10.2262 0.792311 9.86495 0.71795 9.50001 0.718756C8.02344 0.718756 6.83594 1.91563 6.83594 3.38438C6.83594 3.59063 6.86094 3.79688 6.90157 3.99532C4.69063 3.87969 2.71876 2.82344 1.40782 1.20626C1.16895 1.61425 1.04378 2.0788 1.04532 2.55157C1.04532 3.47657 1.51563 4.29219 2.23282 4.77188C1.81017 4.75524 1.39742 4.63907 1.02813 4.43282V4.46563C1.02813 5.76094 1.94376 6.83438 3.16407 7.08126C2.93494 7.14077 2.69924 7.17122 2.46251 7.17188C2.28907 7.17188 2.12501 7.15469 1.95938 7.13126C2.29688 8.18751 3.27969 8.95469 4.45001 8.97969C3.53438 9.69688 2.38751 10.1188 1.14219 10.1188C0.918756 10.1188 0.712506 10.1109 0.498444 10.0859C1.67969 10.8438 3.08126 11.2813 4.59063 11.2813C9.49063 11.2813 12.1719 7.22188 12.1719 3.69844C12.1719 3.58282 12.1719 3.46719 12.1641 3.35157C12.6828 2.97188 13.1375 2.50157 13.5 1.97344Z"
        fill="#26a7de"
      />
    </svg>
  );
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
  const Sun = () => (
    <svg
      width={'1.5rem'}
      height={'1.5rem'}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 3.25C5.38084 3.25 3.25 5.38084 3.25 8C3.25 10.6192 5.38084 12.75 8 12.75C10.6192 12.75 12.75 10.6192 12.75 8C12.75 5.38084 10.6192 3.25 8 3.25ZM8 11.75C7.25832 11.75 6.5333 11.5301 5.91661 11.118C5.29993 10.706 4.81928 10.1203 4.53545 9.43506C4.25162 8.74984 4.17736 7.99584 4.32206 7.26841C4.46675 6.54098 4.8239 5.8728 5.34835 5.34835C5.8728 4.8239 6.54098 4.46675 7.26841 4.32206C7.99584 4.17736 8.74984 4.25162 9.43506 4.53545C10.1203 4.81928 10.706 5.29993 11.118 5.91661C11.5301 6.5333 11.75 7.25832 11.75 8C11.7489 8.99422 11.3534 9.94739 10.6504 10.6504C9.94739 11.3534 8.99422 11.7489 8 11.75Z"
        fill={themeval === 'dark' ? 'white' : 'black'}
      />
      <path
        d="M7.5 0.5H8.5V2H7.5V0.5Z"
        fill={themeval === 'dark' ? 'white' : 'black'}
      />
      <path
        d="M7.5 14H8.5V15.5H7.5V14Z"
        fill={themeval === 'dark' ? 'white' : 'black'}
      />
      <path
        d="M14 7.5H15.5V8.5H14V7.5Z"
        fill={themeval === 'dark' ? 'white' : 'black'}
      />
      <path
        d="M0.5 7.5H2V8.5H0.5V7.5Z"
        fill={themeval === 'dark' ? 'white' : 'black'}
      />
      <path
        d="M12.1465 12.8536L12.8536 12.1465L13.8536 13.1465L13.1465 13.8536L12.1465 12.8536Z"
        fill={themeval === 'dark' ? 'white' : 'black'}
      />
      <path
        d="M2.14645 2.85361L2.85358 2.14648L3.85358 3.14648L3.14645 3.85361L2.14645 2.85361Z"
        fill={themeval === 'dark' ? 'white' : 'black'}
      />
      <path
        d="M2.14639 13.1465L3.14639 12.1465L3.85352 12.8535L2.85352 13.8535L2.14639 13.1465Z"
        fill={themeval === 'dark' ? 'white' : 'black'}
      />
      <path
        d="M12.1465 3.14648L13.1465 2.14648L13.8536 2.85361L12.8536 3.85361L12.1465 3.14648Z"
        fill={themeval === 'dark' ? 'white' : 'black'}
      />
    </svg>
  );
  const Moon = () => (
    <svg
      width={'1.5rem'}
      height={'1.5rem'}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.4245 11.045C17.7468 11.225 17.0487 11.3161 16.3475 11.316C14.2125 11.316 12.2075 10.486 10.7015 8.98001C9.71255 7.98536 9.00156 6.74887 8.63942 5.39381C8.27727 4.03874 8.27661 2.61242 8.6375 1.25701C8.68257 1.08755 8.68228 0.909206 8.63667 0.739884C8.59106 0.570562 8.50172 0.416212 8.37762 0.292316C8.25352 0.16842 8.09903 0.0793356 7.92963 0.0339989C7.76023 -0.0113379 7.58189 -0.0113329 7.4125 0.0340134C5.71566 0.486197 4.16756 1.37664 2.9235 2.61601C-0.9745 6.51401 -0.9745 12.859 2.9235 16.759C3.85003 17.6907 4.95214 18.4294 6.16604 18.9323C7.37994 19.4353 8.68154 19.6924 9.9955 19.689C11.3091 19.6927 12.6104 19.4357 13.824 18.9329C15.0376 18.4302 16.1394 17.6916 17.0655 16.76C18.3058 15.5157 19.1967 13.9668 19.6485 12.269C19.6934 12.0996 19.693 11.9214 19.6474 11.7522C19.6018 11.583 19.5126 11.4287 19.3887 11.3048C19.2648 11.1809 19.1105 11.0917 18.9413 11.0461C18.7721 11.0005 18.5939 11.0001 18.4245 11.045V11.045ZM15.6525 15.346C14.9115 16.0911 14.03 16.6818 13.0592 17.084C12.0883 17.4862 11.0474 17.6918 9.9965 17.689C8.94529 17.6916 7.90399 17.4858 6.93283 17.0835C5.96166 16.6811 5.07988 16.0903 4.3385 15.345C1.2205 12.226 1.2205 7.15001 4.3385 4.03101C4.94101 3.42918 5.6366 2.92843 6.3985 2.54801C6.28698 3.98707 6.48745 5.43325 6.98623 6.7877C7.485 8.14216 8.27031 9.37297 9.2885 10.396C10.3093 11.4174 11.5397 12.2049 12.8948 12.704C14.2498 13.2032 15.6971 13.4021 17.1365 13.287C16.754 14.0476 16.2531 14.7426 15.6525 15.346V15.346Z"
        fill={themeval === 'dark' ? 'white' : 'black'}
      />
    </svg>
  );
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

          }
          .Mdxcontainer{
            padding-left:0.3rem;
            padding-right:0.3rem;

          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
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
                  var Url = document.querySelector('#url').select();

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
                {themeval == 'dark' ? <Sun /> : <Moon />}
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

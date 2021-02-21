import React, { useState } from 'react';
import { css } from '@emotion/core';
const Navbutton = ({ menu }) => {
  const [button, setbutton] = useState(false);
  return (
    <div
      css={css`
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        background-color: #354051;

        .box {
          background-color: #354051;

          display: flex;
          justify-content: center;
          align-items: center;
          height: 20%;
          width: 20px;
          /*border:5px solid white;*/
        }
        .bar {
          width: 100%;
          height: 3px;
          background-color: white;
          transition: 500ms ease-in-out;
          border-radius: 5px;
        }
        .bar::after,
        .bar::before {
          content: '';
          position: absolute;
          width: 20px;
          height: 3px;
          background-color: white;
          transition: 500ms ease-in-out;
          border-radius: 5px;
        }
        .bar::after {
          transform: translateY(8px);
        }
        .bar::before {
          transform: translateY(-8px);
        }

        .box.open .bar {
          transform: translateX(-20px);
          background: transparent;
        }
        .box.open .bar::after {
          transform: translate(20px) rotate(-45deg);
        }
        .box.open .bar::before {
          transform: translate(20px) rotate(45deg);
        }
      `}
    >
      <div
        className={`box ${menu ? 'open' : ''}`}
        onClick={() => {
          // setbutton(false);
          // setbutton(true);
        }}
      >
        <div className="bar">
          <div className="line line1" />
        </div>
      </div>
    </div>
  );
};
export default Navbutton;

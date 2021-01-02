import React, { useState } from 'react';
import { css } from '@emotion/core';
const Form = () => {
  const [email, setemail] = useState();
  const [text, settext] = useState();
  function submitform() {
    window.open(
      `mailto:sidsahni00@gmail.com?subject=subject&body=email:${email}why:${text}`,

    );
  }
  return (
    <div
      css={css`
        width: 100%;
        background: white;
        height: 50vh;
        box-shadow: 4px 4px 6px #000000;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h1 {
          padding-bottom: 1rem;
        }
        div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
        }
        input {
          margin: 10px;
          padding-right: 10px;
          padding: 0.3rem;
        }
        textarea {
          height: 100px;
          padding: 5px;
          margin-bottom: 1rem;
        }

        button {
          margin-bottom: 3rem;
          padding: 0.3rem;
          padding-left: 1rem;
          padding-right: 1rem;
          width: 150px;
          background: #e0777d;
          color: white;
        }
      `}
    >
      <h1> Contact Form</h1>
      <div>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={e => {
            setemail(e.target.value);
          }}
        ></input>
        <textarea
          value={text}
          onChange={e => {
            settext(e.target.value);
          }}
          placeholder="Reason"
          maxlength="300"
          required
        ></textarea>
      </div>
      <button
        onClick={() => {
          submitform();
        }}
      >
        Submit
      </button>
    </div>
  );
};
export default Form;

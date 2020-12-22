import React, { useState } from 'react';
import { css } from '@emotion/core';
const Waves = () => {
  const [waves, setwaves] = useState(0);
  const label = `👋 ${waves} ${waves === 1 ? 'wave' : 'waves'}`;
  return (
    <button
      css={css`
      background: rebeccapurple;
      color:white;
      border:none;
      font-size:1.25rem;
      `}
      onClick={() => setwaves(waves + 1)}
    >
      {label}
    </button>
  );
};
export default Waves;

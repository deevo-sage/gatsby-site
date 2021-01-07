import React, { useContext } from 'react';
import Themecontext from '../contexts/theme';
const Dummy = () => {
  const [theme, settheme] = useContext(Themecontext);
  return (
    <>
      <div></div>
    </>
  );
};

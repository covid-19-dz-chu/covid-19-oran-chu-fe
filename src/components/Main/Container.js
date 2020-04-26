import React from 'react';
import { THIS_YEAR } from '../../utils/constants';
import { StyledFooter } from './style';

// TODO: Extract inline CSS to ./styles.js and make menu items dynamic
function Container({ children }) {
  return (
    <div>
      {children}
      <StyledFooter>©{THIS_YEAR} Done by &hearts;</StyledFooter>
    </div>
  );
}

export default Container;

import React from 'react';
import PropTypes from 'prop-types';
import GlobalStylesM from '@mui/material/GlobalStyles';
import StyledEngineProvider from '@mui/material/StyledEngineProvider'

/**
 * @uxpindocurl https://mui.com/material-ui/api/global-styles/
 * @uxpindescription Use the GlobalStyles component To add global styles that can be used with the "classes" property of components.
 */
function GlobalStyles(props) {

  return (
    <>
    <StyledEngineProvider injectFirst>
    <div //A visual aid for the designer to see in UXPin
    style={{
      width: '160px',
      color: 'white',
      textAlign: 'center',
      background: '#2E7D32',
      borderRadius: 10,
      padding: '20px'
    }}
  >
    <strong>GlobalStyles:</strong>
    <br />
    Please move this <br />marker offscreen
  </div>
  <GlobalStylesM {...props}/>
  </StyledEngineProvider>
  </>)
}

GlobalStyles.propTypes = {
  /**
 * The global styles to inject.
 */
  styles: PropTypes.object,
};

export default GlobalStyles;

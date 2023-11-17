import React from 'react';
import PropTypes from 'prop-types';
import BoxM from '@mui/material/Box';

/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
/**
 * @uxpindocurl https://mui.com/components/box/#main-content
 * @uxpindescription The Box component serves as a wrapper component for most of the CSS utility needs.
 */
function Box(props) {
  const { uxpinRef, ...other } = props;
  return (
    <BoxM {...props} />
  );
}

Box.propTypes = {
  /**
   * The content of the box.
   */
  children: PropTypes.node,
  height: PropTypes.string,
  minHeight: PropTypes.string,
  maxHeight: PropTypes.string,
  width: PropTypes.string,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  padding: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  display: PropTypes.oneOf(['block', 'inline', 'inline-block', 'flex', 'inline-flex', 'grid', 'inline-grid', 'none']),
  position: PropTypes.oneOf(['static', 'relative', 'absolute', 'fixed', 'sticky']),
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  flexBasis: PropTypes.string,
  flex: PropTypes.string,
  flexDirection: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  alignItems: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'center', 'baseline']),
  alignContent: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around']),
  alignSelf: PropTypes.oneOf(['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
  gap: PropTypes.number,
  order: PropTypes.number,
  top: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  margin: PropTypes.string,
  marginTop: PropTypes.string,
  marginRight: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  zIndex: PropTypes.number,


  /**
   * Color of text
   */
  color: PropTypes.oneOf([
    'white',
    'grey.100',
    'grey.200',
    'grey.300',
    'grey.400',
    'grey.500',
    'primary.main',
    'primary.light',
    'primary.dark',
    'secondary.main',
    'secondary.light',
    'secondary.dark',
    'error.main',
    'warning.main',
    'info.main',
    'success.main',
    'text.primary',
    'text.secondary',
    'text.disabled',
  ]),

  bgcolor: PropTypes.oneOf([
    'white',
    'grey.100',
    'grey.200',
    'grey.300',
    'grey.400',
    'grey500',
    'primary.main',
    'primary.light',
    'primary.dark',
    'secondary.main',
    'secondary.light',
    'secondary.dark',
    'error.main',
    'warning.main',
    'info.main',
    'success.main',
    'text.primary',
    'text.secondary',
    'text.disabled',
  ]),



  /**
   * Border margin.
   * In pixels
   */
  border: PropTypes.number,


  /**
   * Border Top.
   * In pixels
   */
  borderTop: PropTypes.number,

  /**
   * Border margin.
   * In pixels
   */
  borderRight: PropTypes.number,

  /**
   * Border margin.
   * In pixels
   */
  borderBottom: PropTypes.number,

  /**
   * Border margin.
   * In pixels
   */
  borderLeft: PropTypes.number,

  borderColor: PropTypes.oneOf([
    'white',
    'grey.100',
    'grey.200',
    'grey.300',
    'grey.400',
    'grey500',
    'primary.main',
    'secondary.main',
    'error.main',
    'warning.main',
    'info.main',
    'success.main',
    'text.primary',
    'text.secondary',
    'text.disabled',
  ]),
  // borderTopColor: PropTypes.oneOf([
  //   'white',
  //   'grey.100',
  //   'grey.200',
  //   'grey.300',
  //   'grey.400',
  //   'grey500',
  //   'primary.main',
  //   'secondary.main',
  //   'error.main',
  //   'warning.main',
  //   'info.main',
  //   'success.main',
  //   'text.primary',
  //   'text.secondary',
  //   'text.disabled',
  // ]),
  // borderBottomColor: PropTypes.oneOf([
  //   'white',
  //   'grey.100',
  //   'grey.200',
  //   'grey.300',
  //   'grey.400',
  //   'grey500',
  //   'primary.main',
  //   'secondary.main',
  //   'error.main',
  //   'warning.main',
  //   'info.main',
  //   'success.main',
  //   'text.primary',
  //   'text.secondary',
  //   'text.disabled',
  // ]),
  // borderRightColor: PropTypes.oneOf([
  //   'white',
  //   'grey.100',
  //   'grey.200',
  //   'grey.300',
  //   'grey.400',
  //   'grey500',
  //   'primary.main',
  //   'secondary.main',
  //   'error.main',
  //   'warning.main',
  //   'info.main',
  //   'success.main',
  //   'text.primary',
  //   'text.secondary',
  //   'text.disabled',
  // ]),
  // borderLeftColor: PropTypes.oneOf([
  //   'white',
  //   'grey.100',
  //   'grey.200',
  //   'grey.300',
  //   'grey.400',
  //   'grey500',
  //   'primary.main',
  //   'secondary.main',
  //   'error.main',
  //   'warning.main',
  //   'info.main',
  //   'success.main',
  //   'text.primary',
  //   'text.secondary',
  //   'text.disabled',
  // ]),

  /**
   * Border Radius.
   * In pixels
   */
  borderRadius: PropTypes.number,
  /**
   * Elevation values: 1-24
   */
  boxShadow: PropTypes.number,

  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.oneOf(['normal', 'bold', 'lighter', 'bolder']),
  fontStyle: PropTypes.oneOf(['normal', 'italic', 'oblique']),
  letterSpacing: PropTypes.string,
  lineHeight: PropTypes.string,
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  textTransform: PropTypes.oneOf(['none', 'capitalize', 'uppercase', 'lowercase']),

  /**
   * The content of the box.
   */
  component: PropTypes.string,
  /**
   * Accepts all system properties, as well as any valid CSS properties.
   */
  sx: PropTypes.object,


};
Box.defaultProps = {
  sx: {},
};

export default Box;

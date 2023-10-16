import React from 'react';
import PropTypes from 'prop-types';
import CardHeaderM from '@mui/material/CardHeader';
import Avatar from '../Avatar/Avatar';
import IconButton from '../IconButton/IconButton';
import { iconVariants } from '../Icon/icon-variants';

/**
 * @uxpindocurl https://mui.com/api/card-header/
 */
function CardHeader(props) {
  const { ...other } = props;
  return (
    <CardHeaderM
      {...other}
      avatar={props.avatar && <Avatar color={props.color}>{props.avatar}</Avatar>}
    >
      {props.children}
    </CardHeaderM>
  );
}

CardHeader.propTypes = {
  children: PropTypes.node,

  /**
   * The action to display in the card header.
   */
  action: PropTypes.node,

  /**
   * The Avatar element to display.
   */
  avatar: PropTypes.node,

  /**
   * Color of the Avatar text.
   */
  color: PropTypes.oneOf([
    'red',
    'pink',
    'purple',
    'indigo',
    'blue',
    'lightBlue',
    'cyan',
    'teal',
    'green',
    'lightGreen',
    'lime',
    'yellow',
    'orange',
    'brown',
    'grey',
  ]),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component: PropTypes.string,

  /**
   * If true, subheader and title won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping the title text, and optional subheader text with the Typography component.
   */
  disableTypography: PropTypes.bool,

  /**
   * The content of the component.
   */
  subheader: PropTypes.node,

  /**
   * These props will be forwarded to the subheader (as long as disableTypography is not true).
   */
  subheaderTypograhyProps: PropTypes.object,

  /**
   * The content of the component.
   */
  title: PropTypes.node,

  /**
   * Aria tag for accessibility
   */
  // ariaLabel: PropTypes.string,

  /**
   * These props will be forwarded to the title (as long as disableTypography is not true).
   */
  titleTypographyProps: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,

  /**
   * On click event to use with UXPin interactions.
   * This interferes with iconOnClick as it runs when clicking icon.
   */
  // onClick: PropTypes.func,

  /**
   * On click event to use with UXPin interactions.
   */
  iconOnClick: PropTypes.func,
};

export default CardHeader;

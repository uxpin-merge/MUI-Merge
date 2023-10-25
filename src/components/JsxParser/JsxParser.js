import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import IconButton from '../IconButton/IconButton';
import Icon from '../Icon/Icon';
import { iconVariants } from '../Icon/icon-variants';
import Collapse from '@mui/material/Collapse';
import AlertTitle from '../AlertTitle/AlertTitle';
import JsxParser from 'react-jsx-parser'

/**
 * @uxpindocurl https://mui.com/api/alert/
 */
function JsxParseComponent(props) {
  const [children, setOpen] = React.useState(props.isOpen);

  React.useEffect(() => {
    setOpen(props.isOpen);
  }, [props.isOpen]); // Only re-run the effect if value prop changes

  const { icon, title, ...otherProps } = props;
  return (
    <div>
      <JsxParser
        components={{ Button, TextField }}
        jsx={props.jsx}
        children={props.jsx}
        {...props}
      />
      {JSON.parse(props.children)}
    </div>
  );

}

JsxParseComponent.propTypes = {
  children: PropTypes.node,
  jsx: PropTypes.string,
};



export default JsxParseComponent;

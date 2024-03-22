import React from 'react'
import PropTypes from 'prop-types'
/**
 * @uxpindescription Use this component to add and style HTML headings (h1-h6)
 * @uxpinhtmloutput
 */
const HtmlTag = (props) => {
  // eslint-disable-next-line react/prop-types
  const { uxpinRef, ...other } = props

  return <props.tag {...other} ref={uxpinRef} />
}

HtmlTag.propTypes = {
  /** id of the tag */
  id: PropTypes.string,
  /** Determines the tag to be used for the component */
  tag: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'span',
    'div',
    'ol',
    'ul',
    'li',
    'b',
    'strong',
    'i',
    'em',
    'mark',
    'small',
    'del',
    'ins',
    'sub',
    'sup',
    'code',
    'option',
    'hr',
  ]),
  /** Content of the tag. Can be other components. */
  children: PropTypes.node,

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** Value of the tag */
  value: PropTypes.string,
}

export default HtmlTag

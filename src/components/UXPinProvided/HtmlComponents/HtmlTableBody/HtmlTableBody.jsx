import React from 'react'
import PropTypes from 'prop-types'

/**
 * @uxpindocurl
 * @uxpinhtmloutput
 */
const HtmlTableBody = (props) => {
  // eslint-disable-next-line react/prop-types
  const { uxpinRef, ...other } = props

  return <tbody {...other} ref={uxpinRef} />
}

HtmlTableBody.propTypes = {
  /** Content of the component */
  children: PropTypes.node,

  // /** Add Bootstrap classes */
  className: PropTypes.object,

  // /** Override styles */
  style: PropTypes.object,

  /** A callback function for when this component is clicked. */
  onClick: PropTypes.func,
}

export default HtmlTableBody

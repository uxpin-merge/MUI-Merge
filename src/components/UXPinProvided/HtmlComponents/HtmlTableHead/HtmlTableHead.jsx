import React from 'react'
import PropTypes from 'prop-types'

/**
 * @uxpindocurl
 * @uxpinhtmloutput
 */

const HtmlTableHead = (props) => {
  // eslint-disable-next-line react/prop-types
  const { uxpinRef, ...other } = props
  return <thead {...other} ref={uxpinRef} />
}

HtmlTableHead.propTypes = {
  /** Content of the component */
  children: PropTypes.node,

  // /** Add Bootstrap classes */
  className: PropTypes.string,

  // /** Override styles */
  style: PropTypes.object,

  /** A callback function for when this component is clicked. */
  onClick: PropTypes.func,
}

export default HtmlTableHead

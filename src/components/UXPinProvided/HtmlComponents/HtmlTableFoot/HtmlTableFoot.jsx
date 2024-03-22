import React from 'react'
import PropTypes from 'prop-types'

/**
 * @uxpindocurl
 * @uxpinhtmloutput
 */

const HtmlTableFoot = (props) => {
  // eslint-disable-next-line react/prop-types
  const { uxpinRef, ...other } = props
  return <tfoot {...other} ref={uxpinRef} />
}

HtmlTableFoot.propTypes = {
  /** Content of the component */
  children: PropTypes.node,

  // /** Add Bootstrap classes */
  className: PropTypes.string,

  // /** Override styles */
  style: PropTypes.object,

  /** A callback function for when this component is clicked. */
  onClick: PropTypes.func,
}

export default HtmlTableFoot

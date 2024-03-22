import React from 'react'
import PropTypes from 'prop-types'

/**
 * @uxpindocurl
 * @uxpinhtmloutput
 */

const HtmlTableRow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { uxpinRef, ...other } = props
  return <tr {...other} ref={uxpinRef} />
}

HtmlTableRow.propTypes = {
  /** Content of the component */
  children: PropTypes.node,

  // /** Add Bootstrap classes */
  className: PropTypes.string,

  // /** Override styles */
  style: PropTypes.object,
}

export default HtmlTableRow

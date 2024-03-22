import React from 'react'
import PropTypes from 'prop-types'

/**
 * @uxpindocurl
 * @uxpinhtmloutput
 */

const HtmlListItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { uxpinRef, ...other } = props
  return <props.listItemType {...other} ref={uxpinRef} style={{ listStyle: 'inherit' }} />
}

HtmlListItem.propTypes = {
  /** Determines the type of list items */
  listItemType: PropTypes.oneOf(['li', 'dt', 'dd']),

  /** Content of the component */
  children: PropTypes.node,

  // /** Add Bootstrap classes */
  className: PropTypes.string,

  // /** Override styles */
  style: PropTypes.object,
}

export default HtmlListItem

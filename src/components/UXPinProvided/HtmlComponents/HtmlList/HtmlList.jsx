import React from 'react'
import PropTypes from 'prop-types'

/**
 * @uxpindocurl
 * @uxpinhtmloutput
 */
const HtmlList = (props) => {
  // eslint-disable-next-line react/prop-types
  const { uxpinRef, listStyleType, style, ...other } = props

  const combinedStyle = {
    listStyleType,
    ...style, // This ensures that any additional style props override the specific font styling if needed
  }

  return <props.listType {...other} style={combinedStyle} ref={uxpinRef} />
}

HtmlList.propTypes = {
  /** Determines the type of list */
  listType: PropTypes.oneOf(['ul', 'ol', 'dl']),
  /** Determines the style type of list */
  listStyleType: PropTypes.oneOf(['disc', 'circle', 'square', 'none']),
  /** Content of the component */
  children: PropTypes.node,

  // /** Add Bootstrap classes */
  className: PropTypes.string,

  // /** Override styles */
  style: PropTypes.object,
}

export default HtmlList

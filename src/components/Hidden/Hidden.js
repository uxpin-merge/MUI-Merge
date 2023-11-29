import React from 'react';
import PropTypes from 'prop-types';
import HiddenM from '@mui/material/Hidden';

/**
 * @uxpindocurl https://mui.com/api/hidden/
 */

function Hidden(props) {
  return (
    <div><HiddenM {...props} /></div>
  );
}

Hidden.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Specify which implementation to use.  'js' is the default, 'css' works better for
   * server-side rendering.
   * @default 'js'
   * @uxpinignoreprop
   */
  implementation: PropTypes.oneOf(['css', 'js']),
  /**
   * You can use this prop when choosing the `js` implementation with server-side rendering.
   *
   * As `window.innerWidth` is unavailable on the server,
   * we default to rendering an empty component during the first mount.
   * You might want to use a heuristic to approximate
   * the screen width of the client browser screen width.
   *
   * For instance, you could be using the user-agent or the client-hints.
   * https://caniuse.com/#search=client%20hint
   * @uxpinignoreprop
   */
  initialWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /**
   * Hide the given breakpoint(s).
   */
  only: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /**
 * If `true`, component is hidden on screens below (but not including) this size.
 * @default false
 */
  xsDown: PropTypes.bool,
  /**
   * If `true`, component is hidden on screens this size and above.
   * @default false
   */
  xsUp: PropTypes.bool,
  /**
 * If `true`, component is hidden on screens below (but not including) this size.
 * @default false
 */
  smDown: PropTypes.bool,
  /**
   * If `true`, component is hidden on screens this size and above.
   * @default false
   */
  smUp: PropTypes.bool,
  /**
 * If `true`, component is hidden on screens below (but not including) this size.
 * @default false
 */
  mdDown: PropTypes.bool,
  /**
   * If `true`, component is hidden on screens this size and above.
   * @default false
   */
  mdUp: PropTypes.bool,
  /**
 * If `true`, component is hidden on screens below (but not including) this size.
 * @default false
 */
  lgDown: PropTypes.bool,
  /**
   * If `true`, component is hidden on screens this size and above.
   * @default false
   */
  lgUp: PropTypes.bool,
  /**
   * If `true`, component is hidden on screens below (but not including) this size.
   * @default false
   */
  xlDown: PropTypes.bool,
  /**
   * If `true`, component is hidden on screens this size and above.
   * @default false
   */
  xlUp: PropTypes.bool,

};

export default Hidden;

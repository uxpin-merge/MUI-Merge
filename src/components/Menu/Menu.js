
import React from 'react';
import PropTypes from "prop-types";
import MenuM from '@mui/material/Menu';
/**
 * @uxpindocurl https://mui.com/material-ui/react-menu/
 * @uxpindescription Menus display a list of choices on temporary surfaces.
 */
const Menu = (props) => {
    return (
        <>
            <MenuM {...props}

                anchorEl={document.querySelector(props.anchorEl)}
            // sx={{ position: "initial !important" }}
            // anchorPosition={{ top: 0, left: 0 }}
            />
        </>
    );
}


Menu.propTypes = {

    /**
     * Menu contents, normally `MenuItem`s.
     */
    children: PropTypes.node,
    /**
   * If `true`, the component is shown.
   */
    open: PropTypes.bool,
    /**
     * An HTML element, or a function that returns one.
     * It's used to set the position of the menu.
     */
    anchorEl: PropTypes.string,
    /**
     * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
     * children are not focusable. If you set this prop to `false` focus will be placed
     * on the parent modal container. This has severe accessibility implications
     * and should only be considered if you manage focus otherwise.
     * @default true
     */
    autoFocus: PropTypes.bool,

    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    /**
     * When opening the menu will not focus the active item but the `[role="menu"]`
     * unless `autoFocus` is also set to `false`. Not using the default means not
     * following WAI-ARIA authoring practices. Please be considerate about possible
     * accessibility implications.
     * @default false
     */
    disableAutoFocusItem: PropTypes.bool,
    /**
     * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
     * @default {}
     */
    MenuListProps: PropTypes.object,
    /**
     * Callback fired when the component requests to be closed.
     *
     * @param {object} event The event source of the callback.
     * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
     */
    onClose: PropTypes.func,

    /**
     * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
     */
    PopoverClasses: PropTypes.object,
    /**
     * The components used for each slot inside.
     *
     * @default {}
     */
    slots: PropTypes.object,
    /**
     * The extra props for the slot components.
     * You can override the existing props or add new ones.
     *
     * @default {}
     */
    slotProps: PropTypes.object,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.object,
    /**
     * The length of the transition in `ms`, or 'auto'
     * @default 'auto'
     */
    transitionDuration: PropTypes.object,
    /**
     * Props applied to the transition element.
     * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
     * @default {}
     */
    TransitionProps: PropTypes.object,
    /**
     * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
     * @default 'selectedMenu'
     */
    variant: PropTypes.oneOf(['menu', 'selectedMenu']),

};

export default Menu;
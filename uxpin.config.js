module.exports = {
  components: {
    categories: [

      {
        name: 'LAYOUT',
        include: [
          'src/components/Box/Box.jsx',
          'src/components/Container/Container.js',
          'src/components/Grid/Grid.js',
          'src/components/ImageList/ImageList.js',
          'src/components/Stack/Stack.js',
          'src/components/Hidden/Hidden.js',
        ],
      },
      {
        name: 'INPUTS',
        include: [
          'src/components/Button/Button.js',
          'src/components/ButtonBase/ButtonBase.js',
          'src/components/ButtonGroup/ButtonGroup.js',
          'src/components/Checkbox/Checkbox.jsx',
          'src/components/FloatingActionButton/FloatingActionButton.js',
          'src/components/IconButton/IconButton.js',
          'src/components/LoadingButton/LoadingButton.js',
          'src/components/Radio/Radio.js',
          'src/components/RadioGroup/RadioGroup.js',
          'src/components/Rating/Rating.js',
          'src/components/Select/Select.js',
          'src/components/Slider/Slider.js',
          'src/components/SplitButton/SplitButton.js',
          'src/components/Switch/Switch.js',
          'src/components/TextField/TextField.js',
          'src/components/ToggleButton/ToggleButton.js',
          'src/components/ToggleButtonGroup/ToggleButtonGroup.js',
        ],
      },
      {
        name: 'DATA DISPLAY',
        include: [
          'src/components/Avatar/Avatar.js',
          'src/components/AvatarGroup/AvatarGroup.js',
          'src/components/Badge/Badge.js',
          'src/components/Chip/Chip.js',
          'src/components/DataGrid/DataGrid.js',
          'src/components/Divider/Divider.js',
          'src/components/Icon/Icon.js',
          'src/components/Image/Image.js',
          'src/components/List/List.js',
          'src/components/Table/Table.js',
          'src/components/Tooltip/Tooltip.js',
          'src/components/Typography/Typography.js',
        ],
      },
      {
        name: 'FEEDBACK',
        include: [
          'src/components/Alert/Alert.js',
          'src/components/Backdrop/Backdrop.js',
          'src/components/Dialog/Dialog.js',
          'src/components/CircularProgress/CircularProgress.js',
          'src/components/LinearProgress/LinearProgress.js',
          'src/components/Skeleton/Skeleton.js',
          'src/components/Snackbar/Snackbar.js',
        ],
      },
      {
        name: 'SURFACES',
        include: [
          'src/components/Accordion/Accordion.js',
          'src/components/AppBar/AppBar.js',
          'src/components/Card/Card.js',
          'src/components/Paper/Paper.js',
        ],
      },
      {
        name: 'NAVIGATION',
        include: [
          'src/components/BottomNavigation/BottomNavigation.js',
          'src/components/Breadcrumbs/Breadcrumbs.js',
          'src/components/Drawer/Drawer.js',
          'src/components/Link/Link.js',
          'src/components/Menu/Menu.js',
          'src/components/Pagination/Pagination.js',
          'src/components/Tabs/Tabs.js',
        ],
      },
      {
        name: 'TRANSITIONS',
        include: [
          'src/components/Collapse/Collapse.js',
          'src/components/Grow/Grow.js',
          'src/components/Slide/Slide.js',
          'src/components/Fade/Fade.js',
          'src/components/Zoom/Zoom.js',
        ],
      },
      {
        name: 'CHARTS',
        include: [
          'src/components/BarChart/BarChart.js',
          'src/components/LineChart/LineChart.js'
        ],
      },
      {
        name: 'UTILITIES',
        include: [
          'src/components/ThemeCustomizer/ThemeCustomizer.js'
        ]
      },
      // {
      //   name: 'COMING SOON',
      //   include: [
      //     'src/components/Stepper/Stepper.js',
      //     'src/components/DatePicker/DatePicker.js',
      //   ]
      // },
      {
        name: 'CHILDREN (PARTS)',
        include: [
          'src/components/AlertTitle/AlertTitle.js',

          'src/components/AccordionActions/AccordionActions.js',
          'src/components/AccordionDetails/AccordionDetails.js',
          'src/components/AccordionSummary/AccordionSummary.js',

          'src/components/BottomNavigationAction/BottomNavigationAction.js',

          'src/components/CardActions/CardActions.js',
          'src/components/CardActionArea/CardActionArea.js',
          'src/components/CardContent/CardContent.js',
          'src/components/CardHeader/CardHeader.js',
          'src/components/CardMedia/CardMedia.js',

          'src/components/DialogActions/DialogActions.js',
          'src/components/DialogContentText/DialogContentText.js',
          'src/components/DialogTitle/DialogTitle.js',
          'src/components/DialogContent/DialogContent.js',

          'src/components/FormControl/FormControl.js',
          'src/components/FormControlLabel/FormControlLabel.js',
          'src/components/FormGroup/FormGroup.js',
          'src/components/FormHelperText/FormHelperText.js',
          'src/components/FormLabel/FormLabel.js',

          'src/components/ImageListItem/ImageListItem.js',
          'src/components/ImageListItemBar/ImageListItemBar.js',

          'src/components/InputLabel/InputLabel.js',

          'src/components/ListItem/ListItem.js',
          'src/components/ListItemAvatar/ListItemAvatar.js',
          'src/components/ListItemButton/ListItemButton.js',
          'src/components/ListItemIcon/ListItemIcon.js',
          'src/components/ListItemText/ListItemText.js',
          'src/components/ListSubheader/ListSubheader.js',
          'src/components/ListItemSecondaryAction/ListItemSecondaryAction.js',

          'src/components/MenuList/MenuList.js',
          'src/components/MenuItem/MenuItem.js',

          'src/components/TableCell/TableCell.js',
          'src/components/TableContainer/TableContainer.js',
          'src/components/TableBody/TableBody.js',
          'src/components/TableFooter/TableFooter.js',
          'src/components/TableHead/TableHead.js',
          'src/components/TableRow/TableRow.js',
          'src/components/TablePagination/TablePagination.js',

          'src/components/Tab/Tab.js',

          'src/components/Toolbar/Toolbar.js',

          'src/components/InputAdornment/InputAdornment.js',
        ],
      },
      // {
      //   name: 'Templates',
      //   include: [
      //     'src/templates/sign-in/Signin.js',
      //     // 'src/templates/Pricing/Pricing.jsx',
      //   ]
      // },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'webpack.config.js',
  },
  name: 'MUI-UXPin-Merge',
};

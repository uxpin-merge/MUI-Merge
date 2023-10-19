import React from 'react';
import Button from '../../Button/Button';
import Dialog from '../Dialog';
import DialogActions from '../../DialogActions/DialogActions';
import DialogContent from '../../DialogContent/DialogContent';
import DialogContentText from '../../DialogContentText/DialogContentText';
import DialogTitle from '../../DialogTitle/DialogTitle';
import IconButton from '../../IconButton/IconButton';
import Icon from '../../Icon/Icon';
import Stack from '../../Stack/Stack';

export default (
  <Dialog uxpId="3" aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" open={true}>
    <Stack direction="row" alignItems="center" justifyContent="space-between" uxpId="stack"><DialogTitle id="alert-dialog-title" sx={{}} uxpId="4">
      {"Use Google's location service?"}
    </DialogTitle>
      <IconButton uxpId="Icon-Button-1" sx={{ "marginRight": "16px" }}>
        <Icon uxpId="icon">close</Icon>
      </IconButton>
    </Stack>
    <DialogContent uxpId="5">
      <DialogContentText id="alert-dialog-description" uxpId="6">
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps
        are running.
      </DialogContentText>
    </DialogContent>
    <DialogActions uxpId="7">
      <Button uxpId="8">Disagree</Button>
      <Button autoFocus uxpId="9">
        Agree
      </Button>
    </DialogActions>
  </Dialog>
);

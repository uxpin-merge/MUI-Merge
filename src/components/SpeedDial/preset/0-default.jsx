import * as React from 'react';
import SpeedDial from '../SpeedDial';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

export default (
  <SpeedDial
    uxpId="speedial-1"
    actions={[
      { icon: <FileCopyIcon />, name: 'Copy' },
      { icon: <SaveIcon />, name: 'Save' },
      { icon: <PrintIcon />, name: 'Print' },
      { icon: <ShareIcon />, name: 'Share' },
    ]}
    spacing={2}
  />
);

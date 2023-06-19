import React, { FC } from 'react';
import LinkM, { LinkProps } from '@mui/material/Link';

/**
 * @uxpindocurl https://mui.com/api/link/
 */
const Link: FC = (props: LinkProps) => {
  return (
    <div style={{ display: 'grid' }}>
      <LinkM {...props} />
    </div>
  );
}

export default Link;

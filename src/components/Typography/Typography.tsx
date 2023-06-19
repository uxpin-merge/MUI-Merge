import React, { FC } from 'react';
import TypographyM, { TypographyProps } from '@mui/material/Typography';

/**
 * @uxpindocurl https://mui.com/api/typography/
 */
const Typography: FC = (props: TypographyProps) => {
  return (
    <TypographyM {...props} style={{ whiteSpace: 'pre-wrap' }} />
  );
}

export default Typography;

import React from 'react';
import { Tooltip } from '@mui/material';

const ShorterTooltip = ({ content = '', maxLength = 8 }) => {
  if (typeof content !== 'string' && typeof content !== 'number') return <></>;

  const shorterContent =
    content.length > maxLength
      ? content.slice(0, maxLength - 2).concat('..')
      : content;
  return (
    <Tooltip title={content} arrow placement="top">
      <span>{shorterContent}</span>
    </Tooltip>
  );
};

export default ShorterTooltip;

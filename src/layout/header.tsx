import React from 'react';
import {Box, styled} from '@mui/material';

const HeaderStyle = styled(Box)({
   borderBottom: '1px solid #f1f1f1'
});

export const Header: React.FC = () => {
  return (
    <HeaderStyle>
        Header
    </HeaderStyle>
  );
};
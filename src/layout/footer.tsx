import React from 'react';
import {Box, styled} from '@mui/material';

const FooterStyle = styled(Box)({
   borderTop: '1px solid #f1f1f1'
});

export const Footer: React.FC = () => {
  return (
    <FooterStyle>
        Header
    </FooterStyle>
  );
};
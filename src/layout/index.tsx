import React from 'react';
import { Container, styled } from '@mui/material';
import { Header } from './header';
import { Footer } from './footer';

const ContainerStyle = styled(Container)({
   minHeight: '80vh'
});

interface LayoutProps {
    title?: string;
    isPublic?: boolean;
    children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
    title = 'Welcome to our portal',
    isPublic = false,
    children
}) => {
  return (
    <>
        <Header />
        <ContainerStyle>{children}</ContainerStyle>
        <Footer />       
    </>
  );
};
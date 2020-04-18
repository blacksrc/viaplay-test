import React from 'react';
import { Container } from './assets/styles';
import HeaderLayout from '../../layouts/HeaderLayout';
import FooterLayout from '../../layouts/FooterLayout';
import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HomePage = () => {
  return (
    <Container>
      <HeaderLayout>
        <Header />
      </HeaderLayout>
      <MainLayout>content</MainLayout>
      <FooterLayout>
        <Footer />
      </FooterLayout>
    </Container>
  );
};

export default HomePage;

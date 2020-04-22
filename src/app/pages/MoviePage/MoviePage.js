import React from 'react';
import { Container } from './assets/styles';
import HeaderLayout from '../../layouts/HeaderLayout';
import FooterLayout from '../../layouts/FooterLayout';
import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MovieView from '../../components/MovieView';

const MoviePage = () => {
  return (
    <Container>
      <HeaderLayout>
        <Header />
      </HeaderLayout>
      <MainLayout>
        <MovieView />
      </MainLayout>
      <FooterLayout>
        <Footer />
      </FooterLayout>
    </Container>
  );
};

export default MoviePage;

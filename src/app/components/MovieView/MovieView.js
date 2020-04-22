import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Container, Image, Title } from './assets/styles';

const MovieView = ({ setDirection, movie, navigation }) => {
  const history = useHistory();
  const location = useLocation();

  // To fix browser back button issue
  useEffect(() => {
    setDirection('');
  }, [setDirection]);

  useEffect(() => {
    if (navigation.direction === 'exit') {
      history.push('/');
    }
  }, [navigation.direction, history]);

  // To get current movie from movies list in order to show. Check out the test message inside component.
  const thisMovie =
    movie.movies.filter((movieItem) => `/${movieItem.system.guid}` === location.pathname) || [];

  if (thisMovie.length === 0) {
    return (
      <Container>
        There is no endpoint to an individual movie to fetch movie's data and show it while
        refreshing the page. So this will only works when user directly navigate from movies page to
        this page.
      </Container>
    );
  }
  return (
    <Container>
      <Title>
        {thisMovie[0].content.series.title} ({thisMovie[0].content.production.year})
      </Title>
      <Image src={thisMovie[0].content.images.landscape.url} />
    </Container>
  );
};

export default MovieView;

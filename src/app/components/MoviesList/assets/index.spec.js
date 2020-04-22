import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import MoviesList from '../MoviesList';
import mockData from './mockData';
import theme from '../../../theme';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

jest.mock('../../MovieItem', () => {
  return {
    __esModule: true,
    default: () => {
      return <div>Movie</div>;
    },
  };
});

jest.mock('../../Spinner', () => {
  return {
    __esModule: true,
    default: () => {
      return <div>Loading</div>;
    },
  };
});

const mockedProps = {
  movie: mockData,
  navigation: { direction: '' },
  setDirection: jest.fn(),
  fetchMoviesStartAsync: jest.fn(),
};

const renderWithTheme = (component) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

describe('<MoviesList />', () => {
  test('Should match pervious snapshot', () => {
    const wrapper = renderWithTheme(<MoviesList {...mockedProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should render movies properly', () => {
    renderWithTheme(<MoviesList {...mockedProps} />);
    expect(screen.queryAllByText('Movie').length).toBe(mockedProps.movie.movies.length);
  });

  test('Should call fetchMoviesStartAsync when movies is empty array', () => {
    mockedProps.movie.movies = [];
    renderWithTheme(<MoviesList {...mockedProps} />);
    expect(screen.queryAllByText('Movie').length).toBe(0);
    expect(mockedProps.fetchMoviesStartAsync).toHaveBeenCalledTimes(1);
  });

  test('Should load spinner component', () => {
    mockedProps.movie.isFetching = true;
    renderWithTheme(<MoviesList {...mockedProps} />);
    expect(screen.queryAllByText('Movie').length).toBe(0);
    expect(screen.queryAllByText('Loading').length).toBe(1);
  });

  test("Should call setDirection on render with ''", () => {
    mockedProps.movie.movies = [];
    renderWithTheme(<MoviesList {...mockedProps} />);
    expect(mockedProps.setDirection).toHaveBeenCalledWith('');
  });
});

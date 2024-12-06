import React from 'react';
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';

const movies = [
  { id: 1, title: 'Doctor Strange' },
  { id: 2, title: 'Inception' },
  { id: 3, title: 'Interstellar' }
];

function Home() {
  return (
    <>
      <NavBar />
      <h1>Home Page</h1>
      <div>
        {movies.map(movie => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </div>
    </>
  );
}

export default Home;
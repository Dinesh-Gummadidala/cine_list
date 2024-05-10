import React, { useState, useEffect } from "react";
import { Header } from "../components/index";
import { Card } from "../components";

export const MovieList = ({ apiPath, title }) => {
  const [movies, setMovies] = useState(null);
  // console.log(process.env.REACT_APP_API_KEY)
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setMovies(result.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]); // Set movies to an empty array in case of an error
      }
    }

    fetchMovies();
  }, [url]);

  return (
    <main>
      <Header />
      <section className="max-w-7xl mx-auto py-7"></section>
      <div className="flex justify-start flex-wrap">
        {movies !== null && movies.length > 0 ? (
          movies.map((movie, index) => <Card key={index} movie={movie} />)
        ) : movies !== null && movies.length === 0 ? (
          <p>No movies available.</p>
        ) : (
          <p>Loading........</p>
        )}
      </div>
    </main>
  );
};

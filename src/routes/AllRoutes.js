import { Routes, Route } from "react-router-dom";
import { MovieDetail, MovieList, Search, Login } from "../pages/index";

import React from "react";
import { Header, Footer } from "../components/index";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-rgb-800">
      <Routes>
        <Route
          path="now_playing"
          element={
            <>
              <MovieList apiPath="movie/now_playing" title="Home" />
              <Footer />
            </>
          }
        />
        <Route
          path="movies/popular"
          element={
            <>
              <MovieList apiPath="movie/popular" title="Popular" /> <Footer />
            </>
          }
        />
        <Route
          path="movies/top"
          element={<MovieList apiPath="movie/top_rated" title="Top Rated" />}
        />
        <Route
          path="movie/:id"
          element={
            <>
              <MovieDetail />
              <Header />
            </>
          }
        />

        <Route
          path="movies/upcoming"
          element={
            <>
              <Header />
              <MovieList apiPath="movie/upcoming" title="Upcoming" /> <Footer />
            </>
          }
        />
        <Route
          path="search"
          element={
            <div>
              <Search apiPath="search/movie" />
              <Header />
              <Footer />
            </div>
          }
        />
        <Route path="" element={<Login apiPath="login" />} />
      </Routes>
    </div>
  );
};

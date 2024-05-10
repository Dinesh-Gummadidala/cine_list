import React from "react";
import { Link } from "react-router-dom";
export function Card({ movie }) {
  const image_Path = "https://image.tmdb.org/t/p/w500";
  const movie_info = {
    id: movie.id,
    imagePath: image_Path + "/" + movie.poster_path,
    title: movie.original_title,
    overview: movie.overview,
    vote: movie.vote,
  };

  return (
    <div className="max-w-sm m-auto p-auto my-5 overflow-scroll mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-center ">
      <Link to={`/movie/${movie_info.id}`}>
        <img
          className="rounded-t-lg"
          src={movie_info.imagePath}
          alt={movie_info.title}
        />
      </Link>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {movie_info.title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
          {movie_info.overview}
        </p>
      </div>
    </div>
  );
}

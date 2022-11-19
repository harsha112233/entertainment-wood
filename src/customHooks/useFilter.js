import React from 'react';

const useFilter = (allmovieData) => {
   return (
    allmovieData.filter(movie =>
        movie.movietype == "movie"
      )
  );
}

export default useFilter;

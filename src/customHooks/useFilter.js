import React from 'react';

const useFilter = (allmovieData,type) => {
   return (
    allmovieData.filter(movie =>
        movie.movietype == type
      )
  );
}

export default useFilter;

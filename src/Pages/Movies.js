import { Box } from "@mui/system";
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomPagination from "../components/CustomPagination";
import MovieCard from "../components/MovieCard";
import useFilter from "../customHooks/useFilter";
import { fetchAllMovie } from "../store/movieSlice";

const Movies = () => {
  const [count, setCount] = useState(8);
  const [sliceData, setSliceData] = useState([]);
  const dispatch = useDispatch();

  const allmovieData = useSelector((state) => state?.movieList?.allMovieData);

  let filterMovie = useFilter(allmovieData, "movie");
  // let filterMovie = allmovieData.filter((movie) => movie.movietype == "movie");

  useEffect(() => {
    setSliceData(filterMovie?.slice(count > 8 ? count - 8 : 0, count));
  }, [count, allmovieData]);

  const handlePage = (page) => setCount(page * 8);

  let countValue = Math.ceil(filterMovie.length / 8);

  return (
    <div>
      <Box
        sx={{
          display: "grid",
          rowGap: "50px",
          gridTemplateColumns: " 1fr 1fr 1fr 1fr",
          placeItems:  "center",
          padding: "40px 0"
        }}
      >
        {sliceData ? (
          sliceData.map((movie, index) => {
            return <MovieCard key={index} movie={movie} />;
          })
        ) : (
          <h1>heee</h1>
        )}
      </Box>

      <CustomPagination count={countValue} handlePage={handlePage} />
    </div>
  );
};

export default Movies;

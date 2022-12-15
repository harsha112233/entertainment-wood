import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMovie, fetchMovie } from "../store/movieSlice";
import MovieCard from "../components/MovieCard";
import Box from "@mui/material/Box";
import CustomPagination from "../components/CustomPagination";

const Trending = () => {
  const [page, setPage] = useState(1);
  const data = useSelector((state) => state.movieList.movieData);
  const alldata = useSelector((state) => state.movieList.allMovieData);
  const dispatch = useDispatch();

  let countValue = Math.ceil(alldata.length / 8);

  useEffect(() => {
    dispatch(fetchMovie(page))
  }, [page]);

  const handlePage = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

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
        {data?.map((movie, ind) => {
          return <MovieCard key={ind} movie={movie} />;
        })}
      </Box>

      <CustomPagination count={countValue} handlePage={handlePage} />
    </div>
  );
};

export default Trending;

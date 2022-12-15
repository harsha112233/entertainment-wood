import { Box, Pagination } from "@mui/material";
import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import CustomPagination from "../components/CustomPagination";
import MovieCard from "../components/MovieCard";
import useFilter from "../customHooks/useFilter";

const Series = () => {
  const [count,setCount]=useState(8)
  const [sliceSeries,setSliceSeries]=useState([])
  const data = useSelector((state) => state?.movieList?.allMovieData);
  const series = useFilter(data, "series");
  let countValue = Math.ceil(series.length / 8);

  useEffect(() => {
    setSliceSeries(series?.slice(count > 8 ? count - 8 : 0, count));
  }, [count, data]);

  const handlePage = (page) => setCount(page * 8);

  return (
    <>
    <Box
      sx={{
          display: "grid",
          rowGap: "50px",
          gridTemplateColumns: " 1fr 1fr 1fr 1fr",
          placeItems:  "center",
          padding: "40px 0"
      }}
    >
      { sliceSeries?.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })
      
      }
    </Box>
    <CustomPagination count={countValue} handlePage={handlePage}  />
    </>
    
  );
};

export default Series;

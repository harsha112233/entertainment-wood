import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomPagination from '../components/CustomPagination';
import MovieCard from '../components/MovieCard';
import useFilter from '../customHooks/useFilter';
import { fetchAllMovie } from '../store/movieSlice';

const Movies = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(8)
  // const[sliceMovieData,setSliceMovieData] = useState()
  const allmovieData = useSelector((state) => state?.movieList?.allMovieData)

  let filterMovie = allmovieData.filter(movie =>
    movie.movietype == "movie"
  )

 
  useEffect(()=>{
    dispatch(fetchAllMovie())
    
   },[dispatch])

 let sliceMovieData=filterMovie?.slice(count > 8 ? count - 8 : 0, count)
  //  useEffect(()=>{
  //   setSliceMovieData(filterMovie?.slice(count > 8 ? count - 8 : 0, count))
  //  },[count])
  
//  useEffect(()=>{
  console.log("sliceMovieData", sliceMovieData)
 
//  },[count])
  

  // console.log("sliceMovieData",sliceMovieData)





//   console.log("filterMovieData",filterMovieData)
//   // console.log("filterMovie",filterMovie)
console.log(allmovieData)


//   useEffect(() => {
//     dispatch(fetchAllMovie())
//     setFilterMovieData(allmovieData.filter(movie =>
//     movie.movietype == "movie"
//   ))
//   }, []);

//   useEffect(() => {
//     setFilterMovieData(filterMovieData?.slice(count > 8 ? count - 8 : 0, count))
//     window.scroll(0, 0);
//   }, [count])

// console.log("movie")
  const handlePage = (page) => setCount(page * 8)


  // let countValue = Math.ceil(sliceMovieData.length / 8)
  // console.log(countValue)



  return (
    <div>
      {/* <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        {
          sliceMovieData?.map((movie, index) => {
            return (
              <MovieCard key={index} movie={movie} />

            )
          })
        }
      </Box>
      <CustomPagination count={countValue} handlePage={handlePage} />/
 */}

    </div>
  );
}

export default Movies;

import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Trending from './Pages/Trending';
import Movies from './Pages/Movies';
import Header from './components/Header';
import Footer from './components/Footer';
import SingleMovieCard from './components/SingleMovieCard';
import Search from '@mui/icons-material/Search';
import Series from './Pages/Series';


function App() {


  return (
    <div>
      <BrowserRouter>
      <Header />
      
         <Routes>
           <Route  path="/" element={<Trending />} />
           <Route path="/movies" element={<Movies />} />
           <Route  path="/search" element={<Search />} /> 
           <Route path="/series" element={<Series />} /> 
           <Route path="/singlemovie/:id" element={<SingleMovieCard />}  />  
          {/* <Route path="/movies" element={<Movies />} />  */}
          </Routes>
          <Footer />
      </BrowserRouter>

    </div>
  )

  // const dispatch=useDispatch()
  // const moviesdata=useSelector((state)=>state.moviesReducer.movieList)
  // const [name,setName]=useState("")
  // return (
  //   <div>
  //    <input type="text"  onChange={(e)=>setName(e.target.value)}/>
  //    <button onClick={()=>dispatch(additem(name))}>add</button>
  //   {
  //     moviesdata?.map((ele)=>{
  //       return <h1>{ele}</h1>
  //     })
  //   }



}

export default App;

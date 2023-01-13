import { Box, Button, Tab, TextField } from "@mui/material";
import React, { useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import useFilter from "../customHooks/useFilter";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = React.useState("1");
  const [results, setResults] = useState([]);

  const alldata = useSelector((state) => state.movieList.allMovieData);

  const getsearchData = (movieTypeList) => {
    if (inputValue) {
      let newData = movieTypeList.filter((movie) =>
        movie.name.toLowerCase().includes(inputValue.toLowerCase())
      );

      newData && setResults(newData);
    }
  };

  const handleSearch = (movieTypeList) => {
    
    getsearchData(movieTypeList);
  };
  const movieList = useFilter(alldata, "movie");
  const seriesList = useFilter(alldata, "series");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue == 1) {
      getsearchData(movieList);
    }
    if (newValue == 2) {
      getsearchData(seriesList);
    }
  };
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center", margin: "30px 0" }}>
        <Box sx={{ width: "900px" }}>
          <TextField
            sx={{ input: { color: "white", background: "#4B5569" } }}
            required
            id="outlined-required"
            fullWidth
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Box>
        <Box
          sx={{ padding: "9px 15px",cursor:"pointer",border: "1px solid", background: "white" }}
        >
          <SearchIcon
            onClick={() => handleSearch(movieList)}
            fontSize="large"
            
          />
        </Box>
      </Box>

      {/* tab */}
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext  value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider"}}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab sx={{color:"white"}}  label="Search By Movie" value="1" />
              <Tab sx={{color:"white"}}  label="Search By Series" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box
              sx={{
                display: "grid",
                rowGap: "50px",
                gridTemplateColumns: " 1fr 1fr 1fr 1fr",
                placeItems:  "center",
                padding: "40px 0"
              }}
            >
              {results ? (
                results.map((movie, index) => {
                  return <MovieCard key={index} movie={movie} />;
                })
              ) : (
                <h1>heee</h1>
              )}
            </Box>
          </TabPanel>
          <TabPanel value="2">
            {" "}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              {results ? (
                results.map((movie, index) => {
                  return <MovieCard key={index} movie={movie} />;
                })
              ) : (
                <h1>heee</h1>
              )}
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default Search;

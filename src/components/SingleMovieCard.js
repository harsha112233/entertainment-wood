import { Grid, Typography, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleMovie } from '../store/movieSlice';
import YouTubeIcon from '@mui/icons-material/YouTube';


const SingleMovieCard = () => {
    const dispatch = useDispatch()
    const singleMoviedata = useSelector((state) => state?.movieList?.singleMovieData)
    let params = useParams();

    useEffect(() => {
        dispatch(fetchSingleMovie(params.id))
    }, [])

    return (
        <>
            <Grid container sx={{ display: "flex", my: "40px", justifyContent: "center", color: "white" }} spacing={2}>
                <Grid sx={{ background: "#44445A", boxShadow: "1px 0px 17px grey", textAlign: "center", padding: "10px" }} item xs={4}>
                    <img src={singleMoviedata.img} height={400} />
                </Grid>
                <Grid sx={{ background: "#44445A", boxShadow: "1px 0px 17px grey", }} item xs={6}>
                    <h1>{singleMoviedata.name}</h1>
                    <Typography sx={{ fontSize: "20px" }}>Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.</Typography>

                    <Button sx={{ my: "20px" }} color={"warning"} variant="contained" startIcon={<YouTubeIcon />}>
                        WATCH THE TRAILER
                    </Button>
                </Grid>
            </Grid>

        </>
    );
}

export default SingleMovieCard;

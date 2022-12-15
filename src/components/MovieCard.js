import React from 'react';
import '../App.css';
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useDispatch } from 'react-redux';
import { fetchSingleMovie } from '../store/movieSlice';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    cardStyling: {
        maxWidth: 250,
        maxHeight: 400,
    

        cursor: "pointer"
    },

   

}))


const MovieCard = ({ movie }) => {
    const dispatch = useDispatch()
    // const handlerSingleMovie = (movieID) => {
    //     dispatch(fetchSingleMovie(movieID))
    // }
   
    const classes = useStyles()
    return (
        <Link style={{textDecoration:"none"}} to={`/singlemovie/${movie.id}`}>
            <Badge   badgeContent={movie.rating} color="primary">
                
            <Card  sx={{ background: "#282C34", color: "white", }} className={classes.cardStyling}>
            <CardMedia
                component="img"
                height="300"

                sx={{ borderRadius: "10px", width: "250px", objectFit: 'fill' }}
                image={movie.img}

            />
            <CardContent sx={{ textAlign: "center" }}>
                <span >{movie.name}</span>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button sx={{ color: "white" }} size="small">{movie.movietype}</Button>
                <Button sx={{ color: "white" }} size="small">{movie.releaseDate}</Button>
            </CardActions>
        </Card>
        </Badge>
        </Link>


    );
}

export default MovieCard;

import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    footerStyling: {
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "#2D313A",
        padding: "10px 0",
        color: "white",
        position: "sticky",
        bottom: "0",
        textAlign: "center"
    },
    footerLink: {
        color: "white", textDecoration: "none"
    }


}))
const Footer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.footerStyling} >
            <Box sx={{ cursor: "pointer" }} >
                <Link className={classes.footerLink} to="/" >
                    <WhatshotIcon />
                    <h6>Trending</h6>
                </Link>

            </Box>
            <Box sx={{ cursor: "pointer" }}>
            <Link className={classes.footerLink} to="/movies" >
                <MovieIcon />
                <h6>Movies</h6>
                </Link>

            </Box>
            <Box sx={{ cursor: "pointer" }}>
            <Link className={classes.footerLink} to="/series" >
                <LiveTvIcon />
                <h6>Series</h6>
                </Link>
            </Box>
            <Box sx={{ cursor: "pointer" }}>
            <Link className={classes.footerLink} to="/search" >
                <SearchIcon />
                <h6>Search</h6>
                </Link>
            </Box>
        </Box>
    )
}

export default Footer
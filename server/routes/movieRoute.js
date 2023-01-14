const express = require("express");
const {createProduct,getallmovie,getSinglemovie,updateMovie,deleteMovie} = require("../controller/movie");

const router = express.Router();

router.route("/").get(getallmovie)

// router.route("/").get(getallmovie).post(createProduct);

// router.route("/:id").get(getSinglemovie).patch(updateMovie).delete(deleteMovie);


module.exports = router;
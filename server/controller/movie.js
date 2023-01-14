const Movie = require("../models/movieModel");

const getallmovie = async (req, res) => {
 
  try {
    let page = Number(req.query.page);
    let limit = Number(req.query.limit);
    if (req.query.page && req.query.limit) {
      let page = Number(req.query.page);
      let limit = Number(req.query.limit);
      let skip = (page - 1) * limit;
      const movieData = await Movie.find({}).skip(skip).limit(limit);
      res.status(200).json(movieData);
    } else {
      const moviedata = await Movie.find({});
      res.status(200).json(moviedata);
    }
  } catch (err) {
    res.status(404).send(err);
  }
};



const createProduct = async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(200).json({
      status: "success",
      data: newMovie,
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

const getSinglemovie = async (req, res) => {
  try {
    const singleMovie = await Movie.findById(req.params.id);
    res.status(200).json(singleMovie);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateMovie = async (req, res) => {
  try {
    const movieupdated = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
        context: "query",
      }
    );

    res.status(200).json(movieupdated);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteMovie = async (req, res) => {
  try {
    const moviedeleted = await Movie.findByIdAndDelete(req.params.id);
    res.status(200).json(moviedeleted);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  getallmovie,
  createProduct,
  getSinglemovie,
  updateMovie,
  deleteMovie,
};

// const getProduct = async (req, res) => {
//   ///pagination
//   let page = Number(req.query.page);
//   let limit = Number(req.query.limit);
//   let skip = (page - 1) * limit;
//   const productData = await Product.find({}).skip(skip).limit(limit);
//   res.json({ productData });
// };

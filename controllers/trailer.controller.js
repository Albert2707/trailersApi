import Trailer from "../models/trailes.model.js";
export const createTrailer = async (req, res, next) => {
  try {
    const newTrailer = Trailer({
      ...req.body,
    });
    await newTrailer.save(newTrailer);
    newTrailer
      .save()
      .then((trailer) => {
        res.status(201).json("trailer created");
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateTrailer = (req, res, next) => {
  const { titulo, year, director, actores, reseña, cover, link } = req.body;
  try {
    const { id } = req.query;
    Trailer.findByIdAndUpdate(id, {
      ...req.body,
    })
      .then((trailer) => {
        res.status(200).json(trailer);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getTrailers = (req, res, next) => {
  try {
    Trailer.find()
      .then((trailers) => {
        const {_id:id, ...info} = trailers;
        res.status(200).json(info);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteTrailer = (req, res, next) => {
  try {
    const { id } = req.query;
    console.log(req.params.id);
    Trailer.findByIdAndDelete(id)
      .then((trailer) => {
        res.status(200).json(trailer);
        console.log("trailer deleted");
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneTrailer = (req, res) => {
  try {
    const { id } = req.params;
    Trailer.findById(id)
      .then((trailer) => {
        res.status(200).json(trailer);
        console.log("trailer found");
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

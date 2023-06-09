import Trailer from "../models/trailes.model.js";
import { v4 as uuid4 } from "uuid";
export const createTrailer = async (req, res, next) => {
  try {
    const newTrailer = Trailer({
      ...req.body,
      id: uuid4(),
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
  try {
    const { id } = req.query;
    Trailer.updateOne({ _id: id }, { ...req.body })
      .then((trailer) => {
        res.status(200).json("updated");
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
        res.status(200).json(trailers);
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
    const { titulo } = req.params;
    Trailer.findOne({titulo})
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

import mongoose from "mongoose";
const { Schema } = mongoose;
const trailerSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },

    titulo: {
      type: String,
      required: true,
    },

    year: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    actores: {
      type: [String],
      required: true,
    },
    reseña: {
      type: String,
      required: false,
    },
    cover: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
        desc: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Trailer", trailerSchema);

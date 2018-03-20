import mongoose from 'mongoose'

export const schema = {
    title: {
      type: String,
      required: [true, 'A song has to have a title']
    },
    url: {
        type: String,
        required: [true, 'Please, provide a url for the song'],
        unique: true
    },
    album: String,
    artist: String,
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    favorite: {
        type: Boolean,
        required: true,
        default: false,
    }
};

const songSchema = new mongoose.Schema(schema);

export const Song = mongoose.model('song', songSchema);

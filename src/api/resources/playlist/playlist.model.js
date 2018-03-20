import mongoose from 'mongoose'

export const schema = {
    title: {
        type: String,
        required: [true, 'A playlist should have a title']
    },
    songs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'song',
            required: true,
        }
    ],
    favorite: {
        type: Boolean,
        required: true,
        default: false
    }
};

const playlistSchema = new mongoose.Schema(schema);

export const Playlist = mongoose.model('playlist', playlistSchema);

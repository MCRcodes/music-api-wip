const mongoose = require('mongoose');

const { Schema } = mongoose;

const albumSchema = new Schema({
  name: String,
  year: Number,
  artist: { type: Schema.Types.ObjectId, ref: 'Artist' },
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;

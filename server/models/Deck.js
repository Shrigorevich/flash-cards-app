const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const DeckSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: false },
    userId: { type: String, trim: true, required: true },
    public: { type: Boolean, required: true },
});

DeckSchema.plugin(timestamps);

DeckSchema.index({ createdAt: 1, updatedAt: 1 });

module.exports = mongoose.model('Deck', DeckSchema);

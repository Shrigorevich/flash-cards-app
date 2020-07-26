const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const CardSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: false },
    deckId: { type: String, trim: true, required: true },
});

CardSchema.plugin(timestamps);
CardSchema.index({ createdAt: 1, updatedAt: 1 });

module.exports = mongoose.model('Card', CardSchema);

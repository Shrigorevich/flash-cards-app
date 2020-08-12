const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const UserSchema = new mongoose.Schema({
    username: { type: String, trim: true, required: false },
    email: { type: String, trim: true, required: true },
    password: { type: String, trim: true, required: true },
    first_name: { type: String, trim: true, required: false },
    last_name: { type: String, trim: true, required: false },
    recent_activity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Deck',
        required: false,
    },
});

UserSchema.plugin(timestamps);

UserSchema.index({ createdAt: 1, updatedAt: 1 });

module.exports = mongoose.model('User', UserSchema);

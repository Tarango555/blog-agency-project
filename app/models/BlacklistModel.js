import mongoose from 'mongoose';

const BlacklistSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true },
  expiresAt: { type: Date, required: true }, // When the token will naturally expire
});

BlacklistSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 }); // Auto-delete expired tokens

const BlacklistModel = mongoose.model('Blacklist', BlacklistSchema);

export default BlacklistModel;

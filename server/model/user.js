import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  id: { type: String },
});

export default mongoose.model('User', userSchema);

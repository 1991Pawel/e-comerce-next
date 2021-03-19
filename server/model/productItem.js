import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  title: String,
  brand: String,
  category: String,
  desc: String,
  gender: String,
  imgUrl: String,
  price: String,
  size: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model('Products', productSchema);

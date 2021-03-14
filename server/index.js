import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();

import userRoutes from './routes/user.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('server is ready!');
});
app.use('/user', userRoutes);

const CONNECTION_URL = process.env.DB_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log('error.message !!'));

mongoose.set('useFindAndModify', false);

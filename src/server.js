import express from 'express';
import 'dotenv/config';
import userRoutes from './routes/user.routes.js';


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`); 
});
import express from "express";
import cors from "cors";
import onboardingRouter from './routes/onboarding';
import moodRoutes from './routes/mood';

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Welcome to SafeSpace");
});

// Use routes
app.use('/api/onboarding', onboardingRouter);
app.use('/api/mood', moodRoutes);

app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});

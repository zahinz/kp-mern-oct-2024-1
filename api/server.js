import express from "express";
import cors from "cors";
import appRoutes from "./routes/index.js";

const PORT = 8080;
const app = express();
// https://www.npmjs.com/package/dotenv
const isProduction = process.env.NODE_ENV === "production";

// middleware

// https://expressjs.com/en/resources/middleware/cors.html
app.use(
  cors({
    origin: isProduction ? "https://zahinzul.com" : "*",
  })
);

// https://expressjs.com/en/api.html#express.json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", appRoutes);

app.listen(PORT, function () {
  console.log(`Server is running at port ${PORT}`);
});

// IMPORT PACKAGES
import express from "express";
const app = express();
import cookieSession from "cookie-session";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middlewares/error-handler";

// IMPORT ROUTERS
import { authRouter } from "./routes/authRoutes";
import { tripsRouter } from "./routes/tripsRoutes";
import { currentUser } from "./middlewares/current-user";

app.set("trust proxy", true);

// MIDDLEWARE
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(morgan("dev"));
app.use(
  cookieSession({
    signed: false,
    // secure: true,
    // httpOnly: false,
  })
);

app.use(currentUser);

// ROUTERS
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/trips", tripsRouter);

// app.use("/api/v1/products", productRouter);

app.all("*", async (req, res, next) => {
  next(new NotFoundError());
  return;
});

app.use(errorHandler);

// EXPORT APP
export { app };

import { WebApp } from "meteor/webapp";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Example routes
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express inside Meteor!" });
});

app.post("/api/data", (req, res) => {
  res.json({ received: req.body });
});

// Attach Express to Meteor’s HTTP server (no app.listen!)
WebApp.connectHandlers.use(app);

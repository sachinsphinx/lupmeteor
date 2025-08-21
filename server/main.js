import { WebApp } from "meteor/webapp";
import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

const meteorRoutes = [
  // "/",
  "/contact",
];

const laravelProxy = createProxyMiddleware({
  target: "http://lupnr.loc",
  changeOrigin: true,
  ws: true,
  headers: {
    Origin: "http://lupnr.loc",
    Referer: "http://lupnr.loc",
    Host: "lupnr.loc",
    Source: "Meteor",
  },
});

// Middleware
app.use((req, res, next) => {
  if (meteorRoutes.includes(req.path)) {
    return next(); // Meteor serves React
  }
  return laravelProxy(req, res, next); // everything else to Laravel
});

WebApp.connectHandlers.use(app);

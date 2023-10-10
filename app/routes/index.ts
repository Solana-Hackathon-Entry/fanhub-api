import { V1 } from "./v1";
import { Express } from "express";

export const V1_ROUTE = V1.map((e: any) => {
  e.url = "v1/" + e.url;
  return e;
});

export const addRoutes = (app: Express) => {
  V1_ROUTE.forEach((route) => {
    app.use("/api/" + route.url, route.route);
  });
};

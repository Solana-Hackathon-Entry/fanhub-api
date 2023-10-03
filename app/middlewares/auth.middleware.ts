import jwt from "jsonwebtoken";
import ENV from "../env/index.js";
import express, { Express, Request, Response, NextFunction } from "express";

export default async (_req: Request, _res: Response, _next: NextFunction) => {
  // const publicRoutes = [
  //   { url: "/api/v1/users", method: "POST" },
  //   { url: "/api/v1/auth/login", method: "POST" },
  // ];

  // if (checkRoutes(publicRoutes, _req.url, _req.method)) {
  //   _next();
  //   return;
  // }

  // const token = getToken(_req.headers["authorization"]);

  // if (!token) {
  //   _res.send({ data: [], status: "fail", message: "Token Needed" });
  //   return;
  // }

  // let userId = await getUserId(token);

  // if (!userId) {
  //   _res.send({ data: [], status: "fail", message: "Invalid token" });
  //   return;
  // }

  _next();
};

const getToken = (header = "") => {
  return header.split(" ")[1];
};

const getUserId = async (token: string = "") => {
  return jwt.verify(token, ENV.JWT_KEY) ?? null;
};

const checkRoutes = (routes: any, currUrl: any, currMethod: any) => {
  return routes.some(
    (route: any) => route.url === currUrl && route.method === currMethod
  );
};

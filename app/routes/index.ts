import V1 from "./v1";
import { Express } from "express";

export const routes = [
  {
    url: "/api/v1/users",
    route: V1.usersRoute,
  },
  {
    url: "/api/v1/auth",
    route: V1.authRoute,
  },
  {
    url: "/api/v1/communities",
    route: V1.communitiesRoute,
  },
  {
    url: "/api/v1/nfts",
    route: V1.nftsRoute,
  },
  {
    url: "/api/v1/upload",
    route: V1.uploadRoute,
  },
];
export const addRoutes = (app: Express) => {
  routes.forEach((route) => {
    app.use(route.url, route.route);
  });
};

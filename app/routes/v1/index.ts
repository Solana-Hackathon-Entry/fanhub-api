import usersRoute from "./users/route";
import authRoute from "./auth/route";
import communitiesRoute from "./communities/route";
import nftsRoute from "./nfts/route";
import uploadRoute from "./upload/route";
import eventsRoute from "./events/route";
import followingsRoute from "./followings/route";

export const V1 = [
  {
    url: "users",
    route: usersRoute,
  },
  {
    url: "auth",
    route: authRoute,
  },
  {
    url: "communities",
    route: communitiesRoute,
  },
  {
    url: "nfts",
    route: nftsRoute,
  },
  {
    url: "upload",
    route: uploadRoute,
  },
  {
    url: "events",
    route: eventsRoute,
  },
  {
    url: "followings",
    route: followingsRoute,
  },
];

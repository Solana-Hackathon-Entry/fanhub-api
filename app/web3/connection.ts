import { Cluster, Connection, clusterApiUrl } from "@solana/web3.js";
import ENV from "../env";

export const CONNECTION = new Connection(clusterApiUrl(ENV.CLUSTER as Cluster));

import ENV from "../env";
import base58 from "bs58";
import { Keypair } from "@solana/web3.js";

export const ACCOUNT = Keypair.fromSecretKey(base58.decode(ENV.PRIVATE_KEY));

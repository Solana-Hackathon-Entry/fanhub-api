import {
  Metaplex,
  keypairIdentity,
  bundlrStorage,
  ReadApiConnection,
  MetaplexPlugin,
} from "@metaplex-foundation/js";
import ENV from "../env";
import { Connection, Keypair } from "@solana/web3.js";

export const BUNDLR_STORAGE = bundlrStorage({
  address: ENV.BUNDLR_STORAGE_ADDRESS,
  providerUrl: ENV.BUNDLR_STORAGE_PROVIDE_URL,
  timeout: ENV.BUNDLR_STORAGE_TIMEOUT,
});

export const getMetaplexInstance = (
  connection: Connection | ReadApiConnection,
  keypairIdentity: MetaplexPlugin
) => {
  const metaplex = Metaplex.make(connection)
    .use(keypairIdentity)
    .use(BUNDLR_STORAGE);
  return metaplex;
};

export const getKeypairIdentity = (keypair: Keypair) => {
  return keypairIdentity(keypair);
};

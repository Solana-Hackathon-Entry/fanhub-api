import { getMetaplexInstance, getKeypairIdentity } from "./metaplex";
import { ACCOUNT } from "./account";
import { CONNECTION } from "./connection";
import { PublicKey, toMetaplexFile } from "@metaplex-foundation/js";
import { urlToBuffer } from "../utils";

const METAPLEX_INSTANCE = getMetaplexInstance(
  CONNECTION,
  getKeypairIdentity(ACCOUNT)
);

async function uploadFile(uri: string) {
  const buffer = await urlToBuffer(uri);
  const file = toMetaplexFile(buffer, "image.jpg");
  const temp = await METAPLEX_INSTANCE.storage().upload(file);
  return temp;
}

async function uploadMetadata(metadata: any, imageUri: string) {
  metadata.image = imageUri;
  const temp = await METAPLEX_INSTANCE.nfts().uploadMetadata(metadata);
  console.log(temp);
  return temp.uri;
}

async function createNFT(uri: string, name: string) {
  const temp = await METAPLEX_INSTANCE.nfts().create({
    uri,
    name,
    sellerFeeBasisPoints: 0,
  });
  console.log(temp);

  return temp.nft.address.toString();
}

async function findAllByCreator() {
  const temp = await METAPLEX_INSTANCE.nfts().findAllByCreator({
    creator: METAPLEX_INSTANCE.identity().publicKey,
  });
  return temp;
}

async function findAllByMintList(mints: string[]) {
  const temp = await METAPLEX_INSTANCE.nfts().findAllByMintList({
    mints: mints.map((e: string) => new PublicKey(e)),
  });
  return temp;
}
// Get all from custodial wallet
async function getAllNFTS() {
  const temp = await METAPLEX_INSTANCE.nfts().findAllByOwner({
    owner: METAPLEX_INSTANCE.identity().publicKey,
  });

  return temp;
}

export {
  findAllByMintList,
  findAllByCreator,
  uploadFile,
  getAllNFTS,
  createNFT,
  METAPLEX_INSTANCE,
  getKeypairIdentity,
  ACCOUNT,
  uploadMetadata,
  CONNECTION,
};

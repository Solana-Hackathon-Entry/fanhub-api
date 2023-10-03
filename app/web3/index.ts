import { getMetaplexInstance, getKeypairIdentity } from "./metaplex";
import { ACCOUNT } from "./account";
import { CONNECTION } from "./connection";
import { toMetaplexFile } from "@metaplex-foundation/js";
import { urlToBuffer } from "../utils";

const METAPLEX_INSTANCE = getMetaplexInstance(
  CONNECTION,
  getKeypairIdentity(ACCOUNT)
);

export async function uploadFile(uri: string) {
  const buffer = await urlToBuffer(uri);
  const file = toMetaplexFile(buffer, "image.jpg");
  return await METAPLEX_INSTANCE.storage().upload(file);
}

export async function uploadNFT(metadata: any, imageUri: string) {
  metadata.image = await uploadFile(imageUri);
  const { uri } = await METAPLEX_INSTANCE.nfts().uploadMetadata(metadata);
  return uri;
}

async function createNFT(metadata: string, imageUri: string) {
  const {
    nft: { address },
  } = await METAPLEX_INSTANCE.nfts().create({
    uri: await uploadNFT(metadata, imageUri),
    name: "Fake Santa",
    sellerFeeBasisPoints: 0,
  });

  return address.toString();
}

// Get all from custodial wallet
async function getAllNFTS() {
  const temp = await METAPLEX_INSTANCE.nfts().findAllByOwner({
    owner: METAPLEX_INSTANCE.identity().publicKey,
  });

  return temp;
}

export {
  getAllNFTS,
  createNFT,
  METAPLEX_INSTANCE,
  getKeypairIdentity,
  ACCOUNT,
  CONNECTION,
};

import { AvatarResolver } from "@ensdomains/ens-avatar";
import { StaticJsonRpcProvider } from "@ethersproject/providers";

import { ethers } from "ethers";
import ensContractAbiData from "./ensContractAbi.json";

export async function resolveEnsNamesToAvatars(
  ensNames: string[],
  providerUrl: string
) {
  // const provider = new ethers.providers.JsonRpcProvider(providerUrl);
  const provider = new StaticJsonRpcProvider(providerUrl);

  const ensContractAddress = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"; // Mainnet ENS contract
  const ensContractAbi = ensContractAbiData;

  const ensContract = new ethers.Contract(
    ensContractAddress,
    ensContractAbi,
    provider
  );
  const avt = new AvatarResolver(provider);

  let avatars: any = [];
  for (const ensName of ensNames) {
    try {
      const avatarURI = await avt.getAvatar(ensName, {
        /* jsdomWindow: jsdom (on nodejs) */
      });
      console.log(avatarURI);
      avatars.push({ avatar: avatarURI, name: ensName });
    } catch (error) {
      console.error(`Failed to resolve avatar for ${ensName}:`, error);
      // handle error, e.g. push default avatar or skip this ensName
    }
  }
  

  return avatars;
}

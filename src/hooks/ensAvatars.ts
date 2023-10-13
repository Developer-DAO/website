import {AvatarResolver} from '@ensdomains/ens-avatar';
import {StaticJsonRpcProvider} from '@ethersproject/providers';
import {ethers} from 'ethers';
import ensContractAbiData from '../lib/ensContractAbi.json';

export async function resolveEnsNamesToAvatars(
  ensNames: string[],
  providerUrl: string
) {
  const provider = new StaticJsonRpcProvider(providerUrl);
  const ensContractAddress = '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'; // Mainnet ENS contract
  const ensContractAbi = ensContractAbiData;

  const ensContract = new ethers.Contract(
    ensContractAddress,
    ensContractAbi,
    provider
  );
  const avt = new AvatarResolver(provider);

  const avatarPromises = ensNames.map(async (ensName) => {
    try {
      const avatarURI = await avt.getAvatar(ensName, {});
      return {avatar: avatarURI, name: ensName};
    } catch (error) {
      console.error(`Failed to resolve avatar for ${ensName}:`, error);
      return null; // or return a default avatar object, depending on your use case
    }
  });

  const avatars = await Promise.all(avatarPromises);

  // Filter out null results, if you've chosen to return null on error
  return avatars.filter(Boolean);
}

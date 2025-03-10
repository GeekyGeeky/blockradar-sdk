import BlockRadar from "../src";

const sdk = new BlockRadar(process.env.BLOCKRADAR_API_KEY!);

const main = async () => {
  try {
    const response = await sdk.wallet.getWallet(process.env.DEFAULT_WALLET_ID);

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

main();

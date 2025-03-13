import BlockRadar, {WalletWithdrawal} from "../src";

const sdk = new BlockRadar(process.env.BLOCKRADAR_API_KEY!);

describe("Wallet Module", () => {
  //   let sdk: BlockRadar;
  //   beforeAll(() => {
  //     sdk = new BlockRadar(process.env.BLOCKRADAR_API_KEY!);
  //   });

  it("should get wallet", async () => {
    const wallet = await sdk.wallet.retrieve(process.env.DEFAULT_WALLET_ID);
    expect(wallet).toBeDefined();
  });
});

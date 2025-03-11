import { WalletModule } from "./modules/wallet";
import { AssetModule } from "./modules/asset";

export * from "./types";

export default class BlockRadar {
  wallet: WalletModule;
  asset: AssetModule;

  constructor(apiKey: string, walletId?: string) {
    this.wallet = new WalletModule(apiKey, walletId);
    this.asset = new AssetModule(apiKey, walletId);
  }
}

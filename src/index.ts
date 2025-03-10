import { WalletModule } from "./modules/wallet";

export * from "./types";

export default class BlockRadar {
  wallet: WalletModule;

  constructor(apiKey: string, walletId?: string) {
    this.wallet = new WalletModule(apiKey, walletId);
  }
}

import { WalletModule } from "./modules/wallet";
import { AssetModule } from "./modules/asset";
import { AddressModule } from "./modules/address";
import { TransactionModule } from "./modules/transaction";
import { AmlModule } from "./modules/aml";
import { AutoSettlementModule } from "./modules/auto-settlement";
import { AssetRecoveryModule } from "./modules/asset-recovery";
import { PaymentLinkModule } from "./modules/payment-link";
import { SmartContractModule } from "./modules/smart-contract";
import { MiscModule } from "./modules/misc";

export * from "./types";

export default class BlockRadar {
  wallet: WalletModule;
  asset: AssetModule;
  address: AddressModule;
  transaction: TransactionModule;
  aml: AmlModule;
  autoSettlement: AutoSettlementModule;
  assetRecovery: AssetRecoveryModule;
  paymentLink: PaymentLinkModule;
  smartContract: SmartContractModule;
  misc: MiscModule;

  constructor(apiKey: string, walletId?: string) {
    this.wallet = new WalletModule(apiKey, walletId);
    this.asset = new AssetModule(apiKey, walletId);
    this.address = new AddressModule(apiKey, walletId);
    this.transaction = new TransactionModule(apiKey, walletId);
    this.aml = new AmlModule(apiKey);
    this.autoSettlement = new AutoSettlementModule(apiKey, walletId);
    this.assetRecovery = new AssetRecoveryModule(apiKey, walletId);
    this.paymentLink = new PaymentLinkModule(apiKey);
    this.smartContract = new SmartContractModule(apiKey, walletId);
    this.misc = new MiscModule(apiKey);
  }
}

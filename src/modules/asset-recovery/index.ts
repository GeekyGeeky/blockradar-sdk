import { BaseService } from "../../core/base.service";
import { BlockRadarError } from "../../core/error";
import { BaseResponse } from "../../core/interface";
import { AssetTransferParams, SalvageNetworkFeeResponse } from "./interface";

export class AssetRecoveryModule extends BaseService {
  private defaultWalletId: string | undefined;
  constructor(apiKey: string, walletId?: string) {
    super(apiKey);
    this.defaultWalletId = walletId;
  }

  private getWalletId(walletId?: string): string {
    const finalWalletId = walletId || this.defaultWalletId;

    if (!finalWalletId) {
      throw new BlockRadarError("Wallet ID is required", 400, "Bad Request");
    }

    return finalWalletId;
  }

  async salvageNetworkFee({
    walletId,
    ...params
  }: AssetTransferParams): Promise<SalvageNetworkFeeResponse> {
    const id = this.getWalletId(walletId);
    return this.post(`/wallets/${id}/salvage/network-fee`, params);
  }

  async salvage({
    walletId,
    ...params
  }: AssetTransferParams): Promise<BaseResponse> {
    const id = this.getWalletId(walletId);
    return this.post(`/wallets/${id}/salvage`, params);
  }
}

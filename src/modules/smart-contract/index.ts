import { BaseService } from "../../core/base.service";
import { BlockRadarError } from "../../core/error";
import { BaseResponse } from "../../core/interface";
import {
  SmartContractParams,
  SmartContractNetworkFeeResponse,
} from "./interface";

export class SmartContractModule extends BaseService {
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

  async networkFee({
    walletId,
    ...params
  }: SmartContractParams): Promise<SmartContractNetworkFeeResponse> {
    const id = this.getWalletId(walletId);
    return this.post(`/wallets/${id}/contracts/network-fee`, params);
  }

  async read({
    walletId,
    ...params
  }: SmartContractParams): Promise<BaseResponse & { data: string }> {
    const id = this.getWalletId(walletId);
    return this.post(`/wallets/${id}/contracts/read`, params);
  }

  async write({
    walletId,
    ...params
  }: SmartContractParams): Promise<BaseResponse & { data: any }> {
    const id = this.getWalletId(walletId);
    return this.post(`/wallets/${id}/contracts/write`, params);
  }
}

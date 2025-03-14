import { BaseService } from "../../core/base.service";
import { BlockRadarError } from "../../core/error";
import {
  GenerateAddressParams,
  AddressParams,
  UpdateAddressParams,
  WhitelistAddressParams,
  GetAddrBalance,
  GetAddrTransactions,
  WithdrawalParams,
} from "./interface";

export class AddressModule extends BaseService {
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

  async getAddresses(walletId?: string) {
    const id = this.getWalletId(walletId);
    return this.get(`/wallets/${id}/addresses`);
  }

  async generateAddress({ walletId, ...params }: GenerateAddressParams) {
    const id = this.getWalletId(walletId);
    return this.post(`/wallets/${id}/addresses`, params);
  }

  async getAddress({ walletId, addressId }: AddressParams) {
    const id = this.getWalletId(walletId);
    return this.get(`/wallets/${id}/addresses/${addressId}`);
  }

  async updateAddress({ walletId, addressId, ...params }: UpdateAddressParams) {
    const id = this.getWalletId(walletId);
    return this.patch(`/wallets/${id}/addresses/${addressId}`, params);
  }

  async whitelistAddress({ walletId, ...params }: WhitelistAddressParams) {
    const id = this.getWalletId(walletId);
    return this.post(`/wallets/${id}/addresses/whitelist`, params);
  }

  async unwhitelistAddress({ walletId, addressId }: AddressParams) {
    const id = this.getWalletId(walletId);
    return this.delete(`/wallets/${id}/addresses/whitelist/${addressId}`);
  }

  async getBalance({
    walletId,
    addressId,
    assetId,
  }: GetAddrBalance & { assetId?: string }) {
    try {
      const id = this.getWalletId(walletId);
      const query = assetId ? `?assetId=${assetId}` : "";
      return this.get(`/wallets/${id}/addresses/${addressId}/balance${query}`);
    } catch (error) {
      throw error;
    }
  }

  async getBalances({ walletId, addressId }: GetAddrBalance) {
    try {
      const id = this.getWalletId(walletId);
      return this.get(`/wallets/${id}/addresses/${addressId}/balances`);
    } catch (error) {
      throw error;
    }
  }

  async getTransactions({
    walletId,
    addressId,
    ...params
  }: GetAddrTransactions) {
    try {
      const id = this.getWalletId(walletId);
      const qs = new URLSearchParams(
        Object.entries(params)
          .filter(([_, value]) => value !== undefined && value !== null)
          .reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
          }, {} as Record<string, string>)
      );
      return this.get(
        `/wallets/${id}/addresses/${addressId}/transactions?${qs}`
      );
    } catch (error) {
      throw error;
    }
  }

  async withdrawalNetworkFee({
    walletId,
    addressId,
    ...params
  }: WithdrawalParams) {
    const id = this.getWalletId(walletId);
    return this.post(
      `/wallets/${id}/addresses/${addressId}/withdraw/network-fee`,
      params
    );
  }

  async withdraw({ walletId, addressId, ...params }: WithdrawalParams) {
    const id = this.getWalletId(walletId);
    return this.post(`/wallets/${id}/addresses/${addressId}/withdraw`, params);
  }
}

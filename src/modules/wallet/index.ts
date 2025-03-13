import { BaseService } from "../../core/base.service";
import { BlockRadarError } from "../../core/error";
import {
  DepositFinder,
  GetBalanceParams,
  SweepAsset,
  WalletUpdate,
  WebhookLogParams,
  WalletWithdrawal,
  WithdrawalNetworkFee,
} from "./interface";

export class WalletModule extends BaseService {
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

  async retrieve(walletId?: string) {
    const id = this.getWalletId(walletId);
    return this.get(`/wallets/${id}`);
  }

  async updateWallet({ walletId, ...params }: WalletUpdate) {
    const id = this.getWalletId(walletId);
    return this.patch(`/wallets/${id}`, params);
  }

  async withdraw({ walletId, ...params }: WalletWithdrawal) {
    const id = this.getWalletId(walletId);
    return this.post(`/wallets/${id}/withdraw`, params);
  }

  async withdrawalNetworkFee({ walletId, ...params }: WithdrawalNetworkFee) {
    const id = this.getWalletId(walletId);
    return this.post(`/wallets/${id}/withdraw/network-fee`, params);
  }

  async getBalance({ walletId, assetId }: GetBalanceParams) {
    try {
      const id = this.getWalletId(walletId);
      const query = assetId ? `?assetId=${assetId}` : "";
      return this.get(`/wallets/${id}/balance${query}`);
    } catch (error) {
      throw error;
    }
  }

  async getBalances({ walletId }: GetBalanceParams & { address?: string }) {
    const id = this.getWalletId(walletId);
    return this.get(`/wallets/${id}/balances`);
  }

  async depositFinder({ walletId, ...params }: DepositFinder) {
    const id = this.getWalletId(walletId);
    return this.post(`/wallets/${id}/rescan/blocks`, params);
  }

  async triggerSweepAssets({ walletId, ...params }: SweepAsset) {
    const id = this.getWalletId(walletId);
    return this.post(`/wallets/${id}/sweep/assets`, params);
  }

  async webhookLogs({ walletId, page, limit }: WebhookLogParams) {
    const id = this.getWalletId(walletId);
    const qs = new URLSearchParams();
    if (page) qs.set("page", page);
    if (limit) qs.set("limit", limit);
    return this.get(`/wallets/${id}/webhooks?${qs}`);
  }
}

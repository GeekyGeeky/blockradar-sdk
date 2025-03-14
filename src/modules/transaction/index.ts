import { BaseService } from "../../core/base.service";
import { BlockRadarError } from "../../core/error";
import { GetTransactionsParams } from "./interface";

export class TransactionModule extends BaseService {
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

  async getTransactions({ walletId, ...params }: GetTransactionsParams) {
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
      return this.get(`/wallets/${id}/transactions?${qs}`);
    } catch (error) {
      throw error;
    }
  }

  async getTransaction(params: { walletId?: string; id: string }) {
    const _id = this.getWalletId(params.walletId);
    return this.get(`/wallets/${_id}/transactions/${params.id}`);
  }

  async resendWebhook({ walletId, id }: { walletId?: string; id: string }) {
    const _id = this.getWalletId(walletId);
    return this.post(`/wallets/${_id}/transactions/webhooks/resend`, { id });
  }

  async triggerAssetSweep(params: {
    walletId?: string;
    transactionId: string;
  }) {
    const _id = this.getWalletId(params.walletId);
    return this.post(`/wallets/${_id}/transactions/sweep/assets`, {
      transactionId: params.transactionId,
    });
  }

  async webhookLogs(params: { walletId?: string; transactionsId: string }) {
    const _id = this.getWalletId(params.walletId);
    return this.get(
      `/wallets/${_id}/transactions/${params.transactionsId}/webhooks`
    );
  }
}

import { BaseService } from "../../core/base.service";
import { BlockRadarError } from "../../core/error";
import { WalletAssets, WalletAssetUpdate } from "./interface";

export class AssetModule extends BaseService {
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

  async getWalletAssets(walletId?: string) {
    const id = this.getWalletId(walletId);
    return this.get(`/wallets/${id}/assets`);
  }

  async addAssetToWallet({ walletId, assetId }: WalletAssets) {
    const id = this.getWalletId(walletId);
    return this.post(`/wallets/${id}/assets`, { assetId });
  }

  async removeAssetFromWallet({ walletId, assetId }: WalletAssets) {
    const id = this.getWalletId(walletId);
    return this.delete(`/wallets/${id}/assets/${assetId}`);
  }

  async updateWalletAsset({ walletId, assetId, isActive }: WalletAssetUpdate) {
    const id = this.getWalletId(walletId);
    return this.patch(`/wallets/${id}/assets/${assetId}`, { isActive });
  }
}

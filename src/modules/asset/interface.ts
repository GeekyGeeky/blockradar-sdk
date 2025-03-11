
export interface WalletAssets {
    walletId?: string;
    assetId: string;
  }
  
 export  interface WalletAssetUpdate extends WalletAssets {
    isActive: boolean;
  }
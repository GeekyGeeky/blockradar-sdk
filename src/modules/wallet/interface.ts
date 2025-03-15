export interface WalletUpdate {
  walletId?: string;
  name: string;
  description: string;
}

export interface WalletWithdrawal {
  walletId?: string;
  assetId: string;
  address: string;
  amount: string;
  gasPrice?: string;
  nounce?: string;
  gasLimit?: string;
  reference?: string;
  metadata?: Record<string, any>;
}

export interface WithdrawalNetworkFee {
  walletId?: string;
  assetId: string; // Required — The ID of the asset to be withdrawn
  address: string; // Required — The recipient’s address
  amount: string; // Required — The amount to be withdrawn
  gasPrice?: string; // Optional — The gas price for the transaction
  nounce?: string; // Optional — The nounce for the transaction
  gasLimit?: string; // Optional — The gas limit for the transaction
}

export interface GetBalanceParams {
  walletId?: string;
  assetId: string;
}

export interface DepositFinder {
  walletId?: string;
  blockNumber?: number;
  transactionHash?: string;
}

export interface SweepAsset {
  walletId?: string;
  transactionId: string;
}

export interface WebhookLogParams {
  walletId?: string;
  page?: string;
  limit?: string;
}

import { BaseResponse } from "../../core/interface";

export interface AssetTransferParams {
  walletId?: string;
  blockchainId: string;
  senderAddress: string;
  recipientAddress: string;
  amount: string;
  tokenAddress?: string;
}

export interface SalvageNetworkFeeResponse extends BaseResponse {
  data: {
    balance: string;
    fee:string;
  };
}

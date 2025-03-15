export interface BaseResponse {
  message: string;
  statusCode: number;
}


export interface SmartContractParams {
  walletId?: string;
  address: string;
  method: string;
  parameters: string;
  abi: string;
}

export interface SmartContractNetworkFeeResponse extends BaseResponse {
  data: {
    balance: true;
    fee: true;
  };
}

import { BaseResponse } from "../../core/interface";

export interface SmartContractParams {
  walletId?: string;
  address: string;
  method: string;
  parameters: string;
  abi: string;
}

export interface SmartContractNetworkFeeResponse extends BaseResponse {
  data: {
    balance: "1.012299726305777896";
    fee: "0.00422709309982132";
  };
}

export interface BaseResponse {
  message: string;
  statusCode: number;
}

export interface Blockchain {
  id: string;
  name: string;
  symbol: string;
  slug: string;
  derivationPath: string;
  isEvmCompatible: boolean;
  isL2: boolean;
  logoUrl: string;
  isActive: boolean;
  tokenStandard: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Asset {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  address: string;
  standard: string | null;
  isActive: boolean;
  logoUrl: string;
  network: string;
  createdAt: string;
  updatedAt: string;
  blockchain: Blockchain;
}

export interface Balance {
  balance: string;
  convertedBalance: string;
  asset: {
    id: string;
    isActive: true;
    createdAt: string;
    updatedAt: string;
    asset: Asset;
  };
}

export interface BalanceResponse extends BaseResponse {
  data: Balance;
}

export interface BalancesResponse extends BaseResponse {
  data: Balance[];
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

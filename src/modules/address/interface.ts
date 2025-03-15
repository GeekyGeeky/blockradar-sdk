import { SmartContractParams } from "../../core/interface";

export interface GenerateAddressParams {
  walletId?: string;
  name?: string; // Optional - The name of the address
  metadata?: Record<string, any>; // Optional - Additional metadata for the address
  showPrivateKey?: boolean; // Optional - Whether to include the private key in the response
  disableAutoSweep?: boolean; // Optional - Disable auto-sweeping of received assets
  enableGaslessWithdraw?: boolean; // Optional - Enable gasless withdrawals from this address
}

export interface AddressParams {
  walletId?: string; // Required - The wallet ID associated with the address
  addressId: string; // Required - The specific address ID to retrieve
}

export interface UpdateAddressParams extends GenerateAddressParams {
  addressId: string;
  isActive?: boolean;
}

export interface WhitelistAddressParams {
  walletId?: string;
  name?: string;
  address: string;
  metadata?: Record<string, any>; // Optional
}

export interface GetAddrBalance {
  walletId?: string;
  addressId: string;
  assetId: string;
}

export interface GetAddrTransactions {
  walletId?: string;
  addressId: string; // Required - The specific address to retrieve transactions for
  id?: string; // Unique transaction ID
  hash?: string; // Blockchain transaction hash
  status?: "PENDING" | "SUCCESS" | "FAILED"; // Transaction status
  type?: "DEPOSIT" | "WITHDRAW" | "SALVAGE"; // Type of transaction
  order?: "ASC" | "DESC"; // Optional - Order transactions by date
  assets?: string; // Optional - Comma-separated list of asset symbols to filter by
}

export interface WithdrawalParams {
  walletId?: string;
  addressId: string;
  assetId: string; // Required - The ID of the asset to be withdrawn
  address: string; // Required - The recipient address for the withdrawal
  amount: string; // Required - The amount to be withdrawn
  reference?: string; // Optional - Reference for the withdrawal
  metadata?: string; // Optional - Additional metadata for the withdrawal
}

export interface AddrSmartContractParams extends SmartContractParams {
  addressId: string;
}

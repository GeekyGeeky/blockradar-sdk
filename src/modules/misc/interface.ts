export interface GetAssetParams {
  network?: "mainnet" | "testnet";
  symbol?: string;
  blockchainId?: string;
}

/**
 * @param assets - Array of asset symbols (e.g., BTC,ETH).
 * @param currency - The currency to compare against (e.g., USD,EUR).
 * */
export interface GetRatesParams {
  assets: string;
  currency: string;
}

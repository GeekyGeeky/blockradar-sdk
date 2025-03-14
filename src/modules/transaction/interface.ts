export interface GetTransactionsParams {
    walletId?: string;
    id?: string; // Unique transaction ID
    hash?: string; // Blockchain transaction hash
    status?: "PENDING" | "SUCCESS" | "FAILED"; // Transaction status
    type?: "DEPOSIT" | "WITHDRAW" | "SALVAGE"; // Type of transaction
    order?: "ASC" | "DESC"; // Optional - Order transactions by date
    assets?: string; // Optional - Comma-separated list of asset symbols to filter by
  }
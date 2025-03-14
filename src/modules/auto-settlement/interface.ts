import { BaseResponse } from "../../core/interface";

export interface CreateBeneficiaryParams {
  walletId?: string;
  address: string;
  name: string;
  settlementFrequency: string;
}

export interface BeneficiaryParams {
  walletId?: string;
  id: string;
}

export interface UpdateBeneficiaryParams {
  walletId?: string;
  id: boolean;
  isActive: boolean;
  name: string;
  settlementFrequency: string;
}

interface AutoSettlement {
  address: string;
  createdAt: string;
  deletedAt: string | null;
  id: string;
  isActive: boolean;
  isDefault: boolean;
  isSettlement: boolean;
  name: string;
  settlementFrequency: "MONTHLY" | "WEEKLY" | "DAILY"; // Added other potential values
  updatedAt: string;
}

/**
 * @desc
 * Auto settlements response
 */

export interface BeneficiaryResponse extends BaseResponse {
  data: AutoSettlement;
}

export interface GetBeneficiariesResponse extends BaseResponse {
  data: AutoSettlement[];
  meta: {
    currentPage: number;
    itemCount: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
}

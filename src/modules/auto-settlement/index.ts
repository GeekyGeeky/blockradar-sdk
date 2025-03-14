import { BaseService } from "../../core/base.service";
import { BlockRadarError } from "../../core/error";
import {
  BeneficiaryParams,
  CreateBeneficiaryParams,
  UpdateBeneficiaryParams,
  BeneficiaryResponse,
  GetBeneficiariesResponse,
} from "./interface";

export class AutoSettlementModule extends BaseService {
  private defaultWalletId: string | undefined;
  constructor(apiKey: string, walletId?: string) {
    super(apiKey);
    this.defaultWalletId = walletId;
  }

  private getWalletId(walletId?: string): string {
    const finalWalletId = walletId || this.defaultWalletId;

    if (!finalWalletId) {
      throw new BlockRadarError("Wallet ID is required", 400, "Bad Request");
    }

    return finalWalletId;
  }

  async createBeneficiary({
    walletId,
    ...params
  }: CreateBeneficiaryParams): Promise<BeneficiaryResponse> {
    const id = this.getWalletId(walletId);
    return this.post(`/wallets/${id}/beneficiaries`, params);
  }

  async getBeneficiaries(walletId?: string): Promise<GetBeneficiariesResponse> {
    const id = this.getWalletId(walletId);
    return this.get(`/wallets/${id}/beneficiaries`);
  }

  async getBeneficiary({
    walletId,
    id,
  }: BeneficiaryParams): Promise<BeneficiaryResponse> {
    const _id = this.getWalletId(walletId);
    return this.get(`/wallets/${_id}/beneficiaries/${id}`);
  }

  async updateBeneficiary({
    walletId,
    id,
    ...params
  }: UpdateBeneficiaryParams): Promise<BeneficiaryResponse> {
    const _id = this.getWalletId(walletId);
    return this.patch(`/wallets/${_id}/beneficiaries/${id}`, params);
  }

  async deleteBeneficiary({
    walletId,
    id,
  }: BeneficiaryParams): Promise<BeneficiaryResponse> {
    const _id = this.getWalletId(walletId);
    return this.delete(`/wallets/${_id}/beneficiaries/${id}`);
  }
}

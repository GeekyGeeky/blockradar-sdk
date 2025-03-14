import { BaseService } from "../../core/base.service";
import { GetAssetParams, GetRatesParams } from "./interface";

export class MiscModule extends BaseService {
  constructor(apiKey: string) {
    super(apiKey);
  }

  async getAssets(data: GetAssetParams) {
    const qs = new URLSearchParams(
      Object.entries(data)
        .filter(([_, value]) => value !== undefined && value !== null)
        .reduce((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {} as Record<string, string>)
    );
    return this.get(`/assets?${qs}`);
  }

  async blockchains() {
    return this.get('/blockchains');
  }

  async getRates(data: GetRatesParams) {
    const qs = new URLSearchParams({ ...data });
    return this.get(`/assets/rates?${qs}`);
  }
}

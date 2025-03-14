import { BaseService } from "../../core/base.service";
import { LookupParams } from "./interface";

export class AmlModule extends BaseService {
  constructor(apiKey: string) {
    super(apiKey);
  }

  async lookup(data: LookupParams) {
    const qs = new URLSearchParams({ ...data });
    return this.get(`/aml/lookup?${qs}`);
  }
}

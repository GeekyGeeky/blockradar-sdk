import { BaseService } from "../../core/base.service";
// import { LookupParams } from "./interface";

export class PaymentLinkModule extends BaseService {
  constructor(apiKey: string) {
    super(apiKey);
  }

  async list() {
    return this.get('/payment_links');
  }

  async retrieve(id: string) {
    return this.get(`/payment_links/${id}`);
  }
}

import { BaseService } from "../../core/base.service";
import {
  CreatePaymentLinkParams,
  UpdatePaymentLinkParams,
  PaymentLinkResponse,
  ListPaymentLinksResponse,
} from "./interface";

export class PaymentLinkModule extends BaseService {
  constructor(apiKey: string) {
    super(apiKey);
  }

  async create(data: CreatePaymentLinkParams): Promise<PaymentLinkResponse> {
    return this.post("/payment_links", data);
  }

  async list(): Promise<ListPaymentLinksResponse> {
    return this.get("/payment_links");
  }

  async retrieve(id: string): Promise<PaymentLinkResponse> {
    return this.get(`/payment_links/${id}`);
  }

  async update({
    id,
    ...data
  }: UpdatePaymentLinkParams): Promise<PaymentLinkResponse> {
    return this.patch(`/payment_links/${id}`, data);
  }
}

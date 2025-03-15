import { BaseResponse } from "../../types";

export interface CreatePaymentLinkParams {
  name: string;
  amount: string;
  description?: string;
  //   file?: File;
  metadata?: string;
  redirectUrl?: string;
  slug?: string;
  successMessage?: string;
}

export interface UpdatePaymentLinkParams {
  id: string;
  name?: string;
  amount?: string;
  description?: string;
  metadata?: string;
  redirectUrl?: string;
  slug?: string;
  successMessage?: string;
}

export interface PaymentLink {
  id: string;
  name: string;
  slug: string;
  currency: string;
  active: boolean;
  network: string;
  type: string;
  created_channel: string;
  configurations: Record<string, unknown>; // Empty object,
  description: string | null;
  amount: number | null;
  imageUrl: string | null;
  redirectUrl: string | null;
  successMessage: string | null;
  inactiveMessage: string | null;
  metadata: Record<string, unknown> | null; //key-value pairs
  createdAt: string; // ISO timestamp
  updatedAt: string; // ISO timestamp
  url: string;
}

export interface PaymentLinkResponse extends BaseResponse {
  data: PaymentLink;
}

export interface ListPaymentLinksResponse extends BaseResponse {
  data: PaymentLink[];
}

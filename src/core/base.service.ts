import AxiosClient from "./blockradar.client";

export abstract class BaseService {
  protected client;

  constructor(apiKey: string) {
    this.client = AxiosClient.getInstance(apiKey);
  }

  protected async get(url: string) {
    const response = await this.client.get(url);
    return response.data;
  }

  protected async post(url: string, body: any) {
    const response = await this.client.post(url, body);
    return response.data;
  }

  protected async patch(url: string, body: any) {
    const response = await this.client.patch(url, body);
    return response.data;
  }

  protected async delete(url: string) {
    const response = await this.client.delete(url);
    return response.data;
  }
}

import FormData from "form-data";
import AxiosClient from "./blockradar.client";
import fs from "fs";

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

  /**
   * Uploads data using multipart/form-data.
   * @param url - The API endpoint.
   * @param filePath - Path to the file.
   * @param additionalData - Additional form fields.
   * @returns API response data.
   */
  async postWithFile(
    url: string,
    filePath?: string,
    additionalData: Record<string, string> = {}
  ): Promise<any> {
    const formData = new FormData();

    if (filePath) {
      formData.append("file", fs.createReadStream(filePath)); // Attach file
    }

    // Append additional form fields
    Object.entries(additionalData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await this.client.post(url, formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    return response.data;
  }
}

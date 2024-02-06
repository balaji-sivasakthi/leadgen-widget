import { Logger } from "../../utils/logger";

type HttpOptions = {
  baseUrl: string;
};

export class HttpService {
  options: HttpOptions;
  constructor(options: HttpOptions) {
    this.options = options;
  }

  postRequest(body: any) {
    return fetch(this.options.baseUrl, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }
}

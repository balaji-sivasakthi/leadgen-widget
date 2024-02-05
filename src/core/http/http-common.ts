import { Logger } from "../../utils/logger";

type HttpOptions = {
  baseUrl: string;
};

export class HttpService {
  options: HttpOptions;
  constructor(options: HttpOptions) {
    Logger.d("Http Service 11", options);
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

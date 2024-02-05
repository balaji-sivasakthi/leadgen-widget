import { Logger } from "../utils/logger";
import InputField from "../view/Input";
import Button from "../view/button";
import Container from "../view/container";
import { HttpService } from "./http/http-common";
import { WidgetOptions } from "./types";

export default class CoreWidget {
  private _root: HTMLElement;
  private httpService: HttpService;

  constructor(options: WidgetOptions) {
    this._root = document.getElementsByTagName("body")[0];
    this.httpService = new HttpService({
      baseUrl: options?.callbackUrl,
    });
    this.init();
  }

  init() {
    const email = new InputField({ name: "Email" });
    const phone = new InputField({ name: "Phone" });
    const submitButton = new Button({ name: "Submit" });

    const container = new Container({
      attributes: {
        className: "form-container",
      },
      children: [email.getNode(), phone.getNode(), submitButton.getNode()],
    });

    this._root.appendChild(container.getNode());

    submitButton.handleClickEvent(async (event) => {
      try {
        const response = await this.httpService.postRequest({
          email: email.getText(),
          phone: phone.getText(),
        });
        Logger.d("Form Response", response);
      } catch (error) {
        Logger.e("[HandleClickEvent]", error);
      }
    });
  }
}

import { numberOnly, validateMobile } from "../utils";
import { Logger } from "../utils/logger";
import InputField from "../ui/Input";
import Text from "../ui/Text";
import Button from "../ui/button";
import Container from "../ui/container";
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
    const errorLabel = new Text({
      name: "",
      type: "p",
      className: "error",
    });

    const email = new InputField({ name: "Email" });
    const phone = new InputField({
      name: "Mobile",
      type: "text",
      maxLength: 10,
    });

    phone.handleInputChange((event) => {
      const mobileNumber = (event.target as HTMLInputElement).value;
      if (!validateMobile(mobileNumber) && !!mobileNumber.length) {
        errorLabel.setText("Please enter a valid Mobile Number");
      } else {
        errorLabel.setText("");
      }
    });

    phone.handleOnKeyPress((event) => {
      if (!numberOnly(event)) event.preventDefault();
    });

    const closeLabel = new Text({
      name: "X",
      type: "span",
      className: "close",
    });

    const closeBox = new Container({
      attributes: {
        className: "close",
      },
      children: [closeLabel.getNode()],
    });

    closeBox.getNode().addEventListener("click", () => {
      container.hide();
      formOverlay.hide()
    });

    const submitButton = new Button({ name: "Submit" });

    const container = new Container({
      attributes: {
        className: "form-container",
      },
      children: [
        closeBox.getNode(),
        email.getNode(),
        phone.getNode(),
        errorLabel.getNode(),
        submitButton.getNode(),
      ],
    });
    const formOverlay = new Container({
      attributes: {
        className: 'form-overlay'
      },
      children: [container.getNode()]
    })
    this._root.appendChild(formOverlay.getNode());

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

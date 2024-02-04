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
    })
    this.init()
  }
  
  init(){

    const input = new InputField({name: "Email"})
    const submitButton = new Button({name: "Submit"})
    
    const container = new Container({
      attributes: {
        className: "form-container"
      },
      children: [input.getNode(), submitButton.getNode()]
    })

    this._root.appendChild(container.getNode());

    submitButton.handleClickEvent(async (event)=>{
      try {
        const response = await this.httpService.postRequest({
          email: input.getText()
         })
         Logger.d("Form Response", response)
      } catch (error) {
        Logger.e("[HandleClickEvent]", error)
      }
    })
  }
}

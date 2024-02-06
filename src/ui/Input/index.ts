import { InputFieldOptions } from "../../core/types";
import { numberOnly } from "../../utils";

export default class InputField {
  private options: InputFieldOptions;
  private _element: HTMLInputElement;

  constructor(options: InputFieldOptions) {
    this.options = options;
    this._element = document.createElement("input");
    this._element.type = options.type || "text";
    this._element.maxLength = options.maxLength || 25;
    this._element.placeholder = options.name;
  }

  handleInputChange(listener: EventListenerOrEventListenerObject) {
    this._element.addEventListener("input", listener);
  }
  handleOnKeyPress(listener: (event: KeyboardEvent) => void) {
    this._element.addEventListener("keydown", listener);
  }
  getText() {
    return this._element.value;
  }
  getNode() {
    return this._element;
  }
}

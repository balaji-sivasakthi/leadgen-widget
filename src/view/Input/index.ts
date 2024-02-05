import { InputFieldOptions } from "../../core/types";

export default class InputField {
  private options: InputFieldOptions;
  private _element: HTMLInputElement;

  constructor(options: InputFieldOptions) {
    this.options = options;
    this._element = document.createElement("input");
    this._element.placeholder = options.name;
  }
  getText() {
    return this._element.value;
  }
  getNode() {
    return this._element;
  }
}

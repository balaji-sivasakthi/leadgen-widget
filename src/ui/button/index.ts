import { ButtonOptions } from "../../core/types";

export default class Button {
  private options: ButtonOptions;
  private _element: HTMLButtonElement;

  constructor(options: ButtonOptions) {
    this.options = options;
    this._element = document.createElement("button");
    this._element.className = options?.className;
    this._element.innerHTML = options.name;
  }
  handleClickEvent(onClick: (this: Window, ev: MouseEvent) => any) {
    this._element.addEventListener("click", onClick);
  }
  getNode() {
    return this._element;
  }
}

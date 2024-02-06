import { TextOptions } from "../../core/types";

export default class Text {
  private options: TextOptions;
  private _element: HTMLHeadElement | HTMLParagraphElement | HTMLDivElement;

  constructor(options: TextOptions) {
    this.options = options;
    this._element = document.createElement(options.type);
    this._element.innerHTML = options.name;
  }
  getText() {
    return this._element.innerHTML;
  }
  getNode() {
    return this._element;
  }
}

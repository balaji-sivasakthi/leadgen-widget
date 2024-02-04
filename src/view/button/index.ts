import { ButtonOptions } from "../../core/types"

export default class Button {
  private options: ButtonOptions
  private _element: HTMLButtonElement

  constructor(options: ButtonOptions) {
    this.options = options;
    this._element = document.createElement('button');
    this._element.innerHTML = options.name; 
    this.render()
  }

  render(){
    this.options.parent.appendChild(this._element)
  }
}

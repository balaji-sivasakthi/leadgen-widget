import InputField from "../view/Input";
import Button from "../view/button";
import { WidgetOptions } from "./types";

export default class CoreWidget {
  private _root: HTMLElement;
  private options: WidgetOptions;

  constructor(options: WidgetOptions) {
    this._root = document.getElementsByTagName("body")[0];
    console.log(this._root)
    this.options = options
    console.log("Core Widget");
    this.init()
  }
  
  init(){
   
    const input = new InputField({
      name: "Email",
      parent: this._root
    })
    
    const submitButton = new Button({
      name: "Button1",
      parent: this._root
    })
    
  }
}

export function parseHtml<T>(str: string) {
  var template = document.createElement("template");
  template.innerHTML = str;
  return template.content.childNodes;
}

export function spreadObject(options: any) {
  return JSON.stringify(options);
}

// TODO: need support for other countries.
export function validateMobile(str: string) {
  var pattern = "^([0|+[0-9]{1,5})?([7-9][0-9]{9})$";
  var obj = new RegExp(pattern);
  if (obj.test(str)) {
    return true;
  } else {
    return false;
  }
}

// TODO: `keycode` is deprecated, need to figure out an alternative way.
export function alphaOnly(event: KeyboardEvent) {
  var key = event.keyCode;
  return (key >= 65 && key <= 90) || key == 8;
}
export function numberOnly(event: KeyboardEvent) {
  var key = event.keyCode;
  return (key >= 48 && key <= 57) || key == 8;
}

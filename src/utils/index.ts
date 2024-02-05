export function parseHtml<T>(str: string) {
  var template = document.createElement("template");
  template.innerHTML = str;
  return template.content.childNodes;
}

export function spreadObject(options: any) {
  return JSON.stringify(options);
}

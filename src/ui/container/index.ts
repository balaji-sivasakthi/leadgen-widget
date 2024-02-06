type ContainerAttributes = {
  className: string;
  type?: "form" | "div";
};

type ContainerOptions = {
  children?: HTMLElement[];
  attributes: ContainerAttributes;
};

export default class Container {
  private children: HTMLElement[];
  attributes: ContainerAttributes;
  container: HTMLFormElement | HTMLDivElement;

  constructor(options: ContainerOptions) {
    this.attributes = options.attributes;
    this.container = document.createElement(options.attributes.type || "div");
    this.container.className = options.attributes.className;
    this.children = options.children;
    this.render();
  }
  show() {
    this.container.style.display = "block";
  }
  hide() {
    this.container.style.display = "none";
  }
  getNode() {
    return this.container;
  }
  render() {
    this.container.append(...this.children);
  }
}

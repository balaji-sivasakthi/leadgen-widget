type ContainerAttributes = {
  className: string;
};

type ContainerOptions = {
  children: HTMLElement[];
  attributes: ContainerAttributes;
};

export default class Container {
  private children: HTMLElement[];
  attributes: ContainerAttributes;
  container: HTMLDivElement;

  constructor(options: ContainerOptions) {
    this.attributes = options.attributes;
    this.container = document.createElement("div");
    this.container.className = options.attributes.className;
    this.children = options.children;
    this.render();
  }
  getNode() {
    return this.container;
  }
  render() {
    this.container.append(...this.children);
  }
}

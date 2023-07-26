import { IEditorConfig } from "./types";
import { EventEmitter } from "./utils/bus";
export class Editor {
  private config: Partial<IEditorConfig>;

  private emitter: EventEmitter;

  private container: Element;

  constructor(config: Partial<IEditorConfig>) {
    this.config = config;
    this.container = this.getContainer(config.selector);
    this.container.classList.add("blue-editor-container");
    this.container.setAttribute("contenteditable", "true");
    this.container.innerHTML = config.value || "";
    this.emitter = new EventEmitter();

    this.container.addEventListener("input", () => {
      const htmlStr = this.container.innerHTML;
      this.handleInput(htmlStr);
    });
  }

  public getContainer(selector?: string) {
    if (!selector) {
      throw new Error("please input query selector of the container");
    }

    const container = document.querySelectorAll(selector);

    if (!container.length) {
      throw new Error("query selector did not match element");
    }

    if (container.length > 1) {
      throw new Error("query selector matched multiple elements");
    }

    return container[0];
  }

  private handleInput(htmlStr: string) {
    this.config.onInput && this.config.onInput.call(null, htmlStr);
  }
}

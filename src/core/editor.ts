import { IEditorConfig } from "./types";
import { EventEmitter } from "./utils/bus";
import { debounce } from "./utils/debounce";

const defaultConfig: Partial<IEditorConfig> = {
  selector: "",
  value: "",
  inputDebounceDelay: 500,
  onInput: () => {},
};

export class Editor {
  private config: Partial<IEditorConfig>;

  private emitter: EventEmitter;

  private container: Element;

  constructor(config: Partial<IEditorConfig>) {
    this.config = Object.assign(defaultConfig, config);

    this.container = this.getContainer(this.config.selector);
    this.container.classList.add("blue-editor-container");
    this.container.setAttribute("contenteditable", "true");
    this.container.innerHTML = this.config.value || "";
    this.emitter = new EventEmitter();

    this.container.addEventListener(
      "input",
      debounce(() => {
        const htmlStr = this.container.innerHTML;
        this.handleInput(htmlStr);
      }, this.config.inputDebounceDelay),
    );
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

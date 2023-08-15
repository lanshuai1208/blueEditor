import { ColorPicker } from "./color-picker";
import { IEditor } from "./../../../types/editor";
import { BaseBtn } from "../base";

interface IConfig {
  parentDom?: Element;
  editor?: Partial<IEditor>;
}

export class BackgroundColor extends BaseBtn {
  colorPicker: ColorPicker;
  constructor(config: IConfig) {
    super(config);
    this.render();
    this.colorPicker = new ColorPicker({
      container: this.dom,
      cb: this.handleColorPick.bind(this),
    });
  }

  handleColorPick(color: string) {
    this.exec(color);
  }

  render() {
    this.dom = document.createElement("button");
    this.dom.classList.add("color-btn");
    this.dom.innerHTML = `背景色`;
    if (!this.config.parentDom) {
      throw new Error("toolbox's container dom is not exist");
    }
    this.config.parentDom?.appendChild(this.dom);
    this.dom?.addEventListener("click", this.showPicker.bind(this));
  }

  showPicker() {
    this.colorPicker.show();
  }

  exec(color: string) {
    const selectedRange = this.getSelectedRange();
    if (!selectedRange) {
      return false;
    }

    const span = document.createElement("span");
    span.style.backgroundColor = color;

    // 删除包裹部分内的background-color属性，否则优先级比最外层包裹的高
    const innerFragment = selectedRange.extractContents();
    const elements = innerFragment.querySelectorAll("*");
    elements.forEach((elem) => {
      if (elem instanceof HTMLElement) {
        elem.style.removeProperty("background-color");
      }
    });

    span.appendChild(innerFragment);
    selectedRange.insertNode(span);
    this.emitUpdate();
    return true;
  }

  destroy() {
    this.dom?.removeEventListener("click", this.showPicker.bind(this));
    this.colorPicker.destroy();
  }
}

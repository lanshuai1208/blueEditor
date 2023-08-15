import { ColorPicker } from "./color-picker";
import { IEditor } from "./../../../types/editor";
import { BaseBtn } from "../base";

interface IConfig {
  parentDom?: Element;
  editor?: Partial<IEditor>;
}

export class Color extends BaseBtn {
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
    console.log(color);
    this.exec(color);
  }

  render() {
    this.dom = document.createElement("button"); // 获取文档中的一个 HTMLDivElement 元素，并将其赋值给 this.state.trigger
    this.dom.classList.add("color-btn");
    this.dom.innerHTML = `颜色`;
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
    console.log("color", color);
    const selectedRange = this.getSelectedRange();
    if (!selectedRange) {
      return false;
    }
    // 创建一个 span 元素，并设置样式为斜体
    const italicSpan = document.createElement("span");
    italicSpan.style.color = color;
    // 将选中区域的内容包含在 span 标签中，并设置样式
    italicSpan.appendChild(selectedRange.extractContents());
    selectedRange.insertNode(italicSpan);
    this.emitUpdate();
    return true;
  }

  destroy() {
    this.dom?.removeEventListener("click", this.showPicker.bind(this));
    this.colorPicker.destroy();
  }
}

import { IEditor } from "./../../types/editor";
import { BaseBtn } from "./base";

interface IConfig {
  parentDom?: Element;
  editor?: Partial<IEditor>;
}

export class SuperScript extends BaseBtn {
  constructor(config: IConfig) {
    super(config);
    this.render();
  }

  render() {
    this.dom = document.createElement("button"); // 获取文档中的一个 HTMLDivElement 元素，并将其赋值给 this.state.trigger
    this.dom.innerHTML = `上标`;
    if (!this.config.parentDom) {
      throw new Error("toolbox's container dom is not exist");
    }
    this.config.parentDom?.appendChild(this.dom);
    this.dom?.addEventListener("click", this.exec.bind(this));
  }

  exec() {
    const selectedRange = this.getSelectedRange();
    if (!selectedRange) {
      return false;
    }
    // 创建一个 span 元素，并设置样式为斜体
    const span = document.createElement("span");
    const sup = document.createElement("sup");

    // 将选中区域的内容包含在 span 标签中，并设置样式
    sup.appendChild(selectedRange.extractContents());
    span.appendChild(sup);
    selectedRange.insertNode(span);
    this.emitUpdate();
    return true;
  }

  destroy() {
    this.dom?.removeEventListener("click", this.exec.bind(this));
  }
}

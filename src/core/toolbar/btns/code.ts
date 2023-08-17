import { IEditor } from "../../types/editor";
import { BaseBtn } from "./base";

interface IConfig {
  parentDom?: Element;
  editor?: Partial<IEditor>;
}

export class Code extends BaseBtn {
  constructor(config: IConfig) {
    super(config);
    this.render();
  }

  render() {
    this.dom = document.createElement("button"); // 获取文档中的一个 HTMLDivElement 元素，并将其赋值给 this.state.trigger
    this.dom.innerHTML = `代码`;
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

    // pre标签用于在 HTML 中指定预格式化文本。
    // pre标签内的所有文本都保留空格、换行符和其他空白字符的原本格式，而不会自动处理它们。
    // pre标签通常用于显示计算机代码和其他格式化文本，如文本艺术，而不会因包含特殊字符而被浏览器解释。
    const p = document.createElement("p");
    const pre = document.createElement("pre");
    const code = document.createElement("code");
    code.classList.add("blue-code");
    const line = this.getZeroWidthSpanceSpan();
    line.classList.add("blue-code-line");
    code.appendChild(line);
    pre.appendChild(code);
    p.appendChild(pre);

    selectedRange.insertNode(p);

    this.emitUpdate();
    return true;
  }

  destroy() {
    this.dom?.removeEventListener("click", this.exec.bind(this));
  }
}

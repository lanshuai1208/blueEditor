import { IEditor } from "../../types/editor";
import { BaseBtn } from "./base";

interface IConfig {
  parentDom?: Element;
  editor?: Partial<IEditor>;
}

export class Tag extends BaseBtn {
  constructor(config: IConfig) {
    super(config);
    this.render();
  }

  render() {
    this.dom = document.createElement("button"); // 获取文档中的一个 HTMLDivElement 元素，并将其赋值给 this.state.trigger
    this.dom.innerHTML = `标签`;
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
    const tag = document.createElement("span");
    tag.classList.add("blue-tag");

    const tagInner = document.createElement("span");
    tagInner.classList.add("blue-tag-inner");
    tagInner.innerText = "标签";

    tag.appendChild(tagInner);

    // italicSpan.style.fontStyle = "italic";
    // 将选中区域的内容包含在 span 标签中，并设置样式
    // italicSpan.appendChild(selectedRange.extractContents());
    selectedRange.insertNode(tag);
    this.emitUpdate();
    return true;
  }

  destroy() {
    this.dom?.removeEventListener("click", this.exec.bind(this));
  }
}

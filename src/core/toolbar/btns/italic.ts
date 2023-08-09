import { IEditor } from "./../../types/editor";

interface IItalic {
  dom?: Element;
}

export interface IBaseBtn {
  dom?: Element;
  //   init: () => boolean;
  render: () => boolean;
  exec: () => boolean;
}

export class Italic implements IBaseBtn {
  dom?: Element;
  constructor(config: { parentDom?: Element }) {
    this.dom = document.createElement("div"); // 获取文档中的一个 HTMLDivElement 元素，并将其赋值给 this.state.trigger
    this.dom.addEventListener("click", this.exec);
    if (!config.parentDom) {
      throw new Error("toolbox's container dom is not exist");
    }
    config.parentDom?.appendChild(this.dom);
  }

  render() {
    return true;
  }

  exec() {
    // 获取选中区域
    const selectedRange = window.getSelection()?.getRangeAt(0);
    if (!selectedRange) {
      return false;
    }
    // 创建一个 span 元素，并设置样式为斜体
    const italicSpan = document.createElement("span");
    italicSpan.style.fontStyle = "italic";
    // 将选中区域的内容包含在 span 标签中，并设置样式
    italicSpan.appendChild(selectedRange.extractContents());
    selectedRange.insertNode(italicSpan);
    return true;
  }
}

// export function createItalic() {
//   // 获取选中区域
//   const selectedRange = window.getSelection()?.getRangeAt(0);
//   if (!selectedRange) {
//     return false;
//   }

//   // 创建一个 span 元素，并设置样式为斜体
//   const italicSpan = document.createElement("span");
//   italicSpan.style.fontStyle = "italic";

//   // 将选中区域的内容包含在 span 标签中，并设置样式
//   italicSpan.appendChild(selectedRange.extractContents());
//   selectedRange.insertNode(italicSpan);
//   return true;
// }

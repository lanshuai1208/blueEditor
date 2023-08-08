import { IEditor } from "./../../types/editor";

interface IItalic {
  dom?: Element;
}

export function createItalic() {
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

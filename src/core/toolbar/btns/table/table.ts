import { IEditor } from "../../../types/editor";
import { BaseBtn } from "../base";

interface IConfig {
  parentDom?: Element;
  editor?: Partial<IEditor>;
}

export class Table extends BaseBtn {
  constructor(config: IConfig) {
    super(config);
    this.render();
  }

  render() {
    this.dom = document.createElement("button"); // 获取文档中的一个 HTMLDivElement 元素，并将其赋值给 this.state.trigger
    this.dom.innerHTML = `表格`;
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

    const row = 5;
    const line = 4;
    // 创建一个 span 元素，并设置样式为斜体
    const table = document.createElement("table");
    table.classList.add("blue-table");
    for (let i = 0; i < row + 1; i++) {
      const tr = document.createElement("tr");
      tr.classList.add("blue-tr");
      for (let j = 0; j < line; j++) {
        if (i === 0) {
          const th = document.createElement("th");
          th.classList.add("blue-th");
          tr.appendChild(th);
        } else {
          const td = document.createElement("td");
          td.classList.add("blue-td");
          tr.appendChild(td);
        }
      }
      table.appendChild(tr);
    }
    // italicSpan.appendChild(selectedRange.extractContents());
    selectedRange.insertNode(table);
    this.emitUpdate();
    return true;
  }

  destroy() {
    this.dom?.removeEventListener("click", this.exec.bind(this));
  }
}

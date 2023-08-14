import { IEditor } from "@/core/types/editor";

interface IConfig {
  parentDom?: Element;
  editor?: Partial<IEditor>;
}

export abstract class BaseBtn {
  dom?: Element;
  editor?: Partial<IEditor>;
  config: IConfig;
  editorRange?: Range;
  constructor(config: IConfig) {
    this.config = config;
    this.editor = config.editor;
    const editorContainer = this.editor?.container;
    if (editorContainer) {
      this.editorRange = document.createRange();
      this.editorRange.selectNode(editorContainer);
    }
  }

  abstract render(): void;

  abstract exec(): boolean;

  abstract destroy(): void;

  emitUpdate() {
    this.editor &&
      this.editor.emit &&
      this.editor?.emit("update", this.editor.container?.innerHTML);
    return true;
  }

  // 判断Range 对象是否在DOM容器内
  checkRangeInEditor(range: Range) {
    const container = this.editor?.container;
    if (!container) {
      return false;
    }
    if (!this.editorRange) {
      return false;
    }

    return (
      range.compareBoundaryPoints(Range.START_TO_START, this.editorRange) >=
        0 &&
      range.compareBoundaryPoints(Range.END_TO_END, this.editorRange) <= 0
    );
  }

  // 获取选中区域
  getSelectedRange() {
    const selection = window.getSelection();
    if (!selection) {
      return;
    }
    const range = selection?.getRangeAt(0);
    if (!range) {
      return;
    }
    if (!this.checkRangeInEditor(range)) {
      return;
    }
    return range;
  }
}

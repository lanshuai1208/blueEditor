import { IEditor } from "@/core/types/editor";

// export interface IBaseBtn {
//   dom?: Element;
//   //   init: () => boolean;
//   render: () => void;
//   exec: () => boolean;
//   destroy: () => void;
// }

interface IConfig {
  parentDom?: Element;
  editor?: Partial<IEditor>;
}

export abstract class BaseBtn {
  dom?: Element;
  editor?: Partial<IEditor>;
  config: IConfig;
  constructor(config: IConfig) {
    this.config = config;
    this.editor = config.editor;
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

  // 获取选中区域
  getSelectedRange() {
    return window.getSelection()?.getRangeAt(0);
  }
}

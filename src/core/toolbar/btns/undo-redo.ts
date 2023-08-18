import { IEditor } from "../../types/editor";
import { BaseBtn } from "./base";

interface IConfig {
  parentDom?: Element;
  editor?: Partial<IEditor>;
}

export class UndoRedo extends BaseBtn {
  undoDom?: Element;
  redoDom?: Element;
  constructor(config: IConfig) {
    super(config);
    this.render();
  }

  render() {
    this.undoDom = document.createElement("button");
    this.undoDom.innerHTML = `Undo`;

    this.redoDom = document.createElement("button");
    this.redoDom.innerHTML = `Redo`;

    if (!this.config.parentDom) {
      throw new Error("toolbox's container dom is not exist");
    }
    this.config.parentDom?.appendChild(this.undoDom);
    this.config.parentDom?.appendChild(this.redoDom);
    this.undoDom.addEventListener("click", this.undo.bind(this));
    this.redoDom.addEventListener("click", this.redo.bind(this));
  }

  undo() {
    this.editor?.undo && this.editor?.undo();
  }

  redo() {
    this.editor?.redo && this.editor?.redo();
  }

  exec() {
    return true;
  }

  destroy() {
    this.undoDom?.removeEventListener("click", this.undo.bind(this));
    this.redoDom?.removeEventListener("click", this.redo.bind(this));
  }
}

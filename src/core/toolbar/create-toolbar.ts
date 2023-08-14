import { Italic } from "./btns/italic";
import { IToolbar, IToolbarConfig } from "../types/toolbar";
// import "./utils/dom";

const defaultCfg: IToolbarConfig = {
  selector: "",
};

export function createToolBar(cfg: Partial<IToolbarConfig>): IToolbar {
  // const editorDocument = cfg.editor?.container?conte;

  const container = document.querySelector(cfg.selector || "") || undefined;
  container?.classList.add("blue-toolbar-container");
  if (!container) {
    throw new Error("can't find toolbar container");
  }

  // const italicBtn = new Italic({
  //   parentDom: container,
  // });

  const toolbar: IToolbar = {
    container,
    btns: [],
    destroy: function () {
      this.btns.forEach((btn) => btn.destroy());
    },
  };

  toolbar.btns.push(
    new Italic({ parentDom: toolbar.container, editor: cfg.editor }),
  );

  return toolbar;
}

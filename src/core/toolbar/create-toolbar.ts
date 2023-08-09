import { Italic } from "./btns/italic";
import { IToolbar, IToolbarConfig } from "../types/toolbar";
// import "./utils/dom";

const defaultCfg: IToolbarConfig = {
  selector: "",
};

export function createToolBar(cfg: Partial<IToolbarConfig>): IToolbar {
  // const editorDocument = cfg.editor?.container?conte;

  const toolbar: IToolbar = {
    container: document.querySelector(cfg.selector || "") || undefined,
    btns: [],
  };

  toolbar.btns.push(new Italic({ parentDom: toolbar.container }));

  return toolbar;
}

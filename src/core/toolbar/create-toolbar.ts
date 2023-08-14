import { FontBold } from "./btns/font-bold";
import { UnderLine } from "./btns/underline";
import { Italic } from "./btns/italic";
import { IToolbar, IToolbarConfig } from "../types/toolbar";
import { LineThrough } from "./btns/line-through";
import { SuperScript } from "./btns/super-script";
import { SubScript } from "./btns/sub-script";

const defaultCfg: IToolbarConfig = {
  selector: "",
};

export function createToolBar(cfg: Partial<IToolbarConfig>): IToolbar {
  const container = document.querySelector(cfg.selector || "") || undefined;
  container?.classList.add("blue-toolbar-container");
  if (!container) {
    throw new Error("can't find toolbar container");
  }

  const toolbar: IToolbar = {
    container,
    btns: [],
    destroy: function () {
      this.btns.forEach((btn) => btn.destroy());
    },
  };

  toolbar.btns.push(
    new Italic({ parentDom: toolbar.container, editor: cfg.editor }),
    new UnderLine({ parentDom: toolbar.container, editor: cfg.editor }),
    new LineThrough({ parentDom: toolbar.container, editor: cfg.editor }),
    new SuperScript({ parentDom: toolbar.container, editor: cfg.editor }),
    new SubScript({ parentDom: toolbar.container, editor: cfg.editor }),
  );

  return toolbar;
}

import { IEditorConfig, IEditor } from "./types/types";

const defaultConfig: IEditorConfig = {
  selector: "",
  value: "",
  inputDebounceDelay: 500,
  onInput: () => {},
  onCreate: () => {},
  onDestroy: () => {},
};

export function createCoreEditor(config: Partial<IEditorConfig>): IEditor {
  const cfg = Object.assign(defaultConfig, config);

  const editor: IEditor = {
    selector: cfg.selector,
    value: "",
    inputDebounceDelay: cfg.inputDebounceDelay,
    on: () => {},
    off: () => {},
    emit: () => {},
    onInput: cfg.onInput,
    onCreate: () => {},
    onDestroy: () => {},
  };

  // 处理container
  if (!cfg.selector) {
    throw new Error("please input query selector of the container");
  }
  editor.selector = cfg.selector;
  editor.container = getContainer(cfg.selector);
  editor.container.setAttribute("contenteditable", "true");
  editor.container.innerHTML = cfg.value || "";

  return editor;
}

// 获取绑定的DOM容器
function getContainer(selector: string) {
  const container = document.querySelectorAll(selector);

  if (!container.length) {
    throw new Error("query selector did not match element");
  }

  if (container.length > 1) {
    throw new Error("query selector matched multiple elements");
  }

  return container[0];
}

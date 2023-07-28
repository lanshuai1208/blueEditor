import { withLifeCycle } from "./plugins/with-lifecycle";
import { withEmitter } from "./plugins/with-emitter";
import { IEditorConfig, IEditor } from "./types/types";

const defaultConfig: IEditorConfig = {
  selector: "",
  value: "",
  inputDebounceDelay: 500,
  onUpdate: () => {},
  onCreated: () => {},
  onMounted: () => {},
  onDestroy: () => {},
};

const getDefaultEditor = (): IEditor => {
  return {
    selector: "",
    value: "",
    inputDebounceDelay: 500,
    on: () => {},
    off: () => {},
    emit: () => {},
    onCreated: () => {},
    onMounted: () => {},
    onUpdate: () => {},
    onDestroy: () => {},
    destroy: () => {},
  };
};

export function createCoreEditor(config: Partial<IEditorConfig>) {
  // 创建editor
  const cfg = Object.assign(defaultConfig, config);

  const defaultEditor: IEditor = Object.assign(getDefaultEditor(), {
    selector: cfg.selector,
    value: "",
    inputDebounceDelay: cfg.inputDebounceDelay,
    on: () => {},
    off: () => {},
    emit: () => {},
    onCreated: cfg.onCreated,
    onMounted: cfg.onMounted,
    onUpdate: cfg.onUpdate,
    onDestroy: cfg.onDestroy,
    destroy: () => {},
  });

  let editor: IEditor = withLifeCycle(withEmitter(defaultEditor));

  editor.emit("created");

  // 绑定容器DOM
  if (!cfg.selector) {
    throw new Error("please input query selector of the container");
  }
  editor.selector = cfg.selector;
  editor.container = getContainer(cfg.selector);
  editor.container.setAttribute("contenteditable", "true");
  editor.container.classList.add("blue-editor-container");
  editor.container.innerHTML = cfg.value || "";

  editor.emit("mounted");

  // 设置销毁函数
  editor.destroy = () => {
    editor.emit("destroy");
    setTimeout(() => {
      editor = getDefaultEditor();
    });
  };

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

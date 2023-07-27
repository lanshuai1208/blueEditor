import { IEditorConfig, IEditor } from "./types/types";
import { debounce } from "./utils/debounce";
import { EventEmitter } from "./utils/emitter";

const defaultConfig: Partial<IEditorConfig> = {
  selector: "",
  value: "",
  inputDebounceDelay: 500,
  onInput: () => {},
};

export function createEditor(cf: Partial<IEditorConfig>): IEditor {
  const config = Object.assign(defaultConfig, cf);

  const editor: IEditor = {
    selector: "",
    value: "",
    inputDebounceDelay: 500,
    emittier: new EventEmitter(),
    on: () => {},
    off: () => {},
    emit: () => {},
  };

  // 处理container
  if (!config.selector) {
    throw new Error("please input query selector of the container");
  }
  editor.selector = config.selector;
  editor.container = getContainer(config.selector);
  editor.container.setAttribute("contenteditable", "true");
  editor.container.innerHTML = config.value || "";

  // 数据绑定
  editor.container.addEventListener(
    "input",
    debounce(() => {
      const htmlStr = editor.container?.innerHTML;
      handleInput(htmlStr || "", config.onInput);
    }, config.inputDebounceDelay),
  );

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

// 处理输入变化
function handleInput(htmlStr: string, onInput?: (...args: any[]) => any) {
  onInput && onInput.call(null, htmlStr);
}

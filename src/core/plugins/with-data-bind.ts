import { IEditor } from "../types/types";
import { debounce } from "../utils/debounce";

export const withDataBind = <T extends IEditor>(editor: T) => {
  // 数据绑定
  editor.container?.addEventListener(
    "input",
    debounce(() => {
      const htmlStr = editor.container?.innerHTML;
      handleInput(htmlStr || "", editor.onInput);
      editor.emit("change", htmlStr);
    }, editor.inputDebounceDelay),
  );

  editor.on("change", (val: string) => {
    console.log("changed ", val);
  });

  return editor;
};

// 处理输入变化
function handleInput(htmlStr: string, onInput?: (...args: any[]) => any) {
  onInput && onInput.call(null, htmlStr);
}

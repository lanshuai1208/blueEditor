import { IEditor } from "../types/editor";
import { debounce } from "../utils/debounce";

export const withDataBind = <T extends IEditor>(editor: T) => {
  // 数据绑定
  editor.container?.addEventListener(
    "input",
    debounce(() => {
      const htmlStr = editor.container?.innerHTML;
      // handleInput(htmlStr || "", editor.onUpdate);
      htmlStr && editor.update(htmlStr);
    }, editor.inputDebounceDelay),
  );

  return editor;
};

// // 处理输入变化
// function handleInput(htmlStr: string, onUpdate?: (...args: any[]) => any) {
//   onUpdate && onUpdate.call(null, htmlStr);
// }

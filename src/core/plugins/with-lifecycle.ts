import { IEditor } from "../types/editor";

// 选区功能
export const withLifeCycle = <T extends IEditor>(editor: T) => {
  editor.on("created", () => editor.onCreated(editor));
  editor.on("mounted", () => editor.onMounted(editor));
  editor.on("update", (val) => editor.onUpdate(val));
  editor.on("destroy", () => editor.onDestroy());

  return editor;
};

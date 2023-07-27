import { lifeCycleType } from "./../types/types";
import { IEditor } from "../types/types";

// 选区功能
export const withLifeCycle = <T extends IEditor>(editor: T) => {
  //   //   editor.container.addEventListener("selectstart", () => {
  //   //     document.addEventListener("mouseup", () => {
  //   //       console.log("select ", window.getSelection()?.anchorNode);
  //   //     });
  //   //   });

  //   editor.container.addEventListener("selectionchange", (e) => {
  //     const sel = window.getSelection();

  //     const range = sel?.getRangeAt(0);

  //     console.log(range);

  //     if (!range) {
  //       return;
  //     }
  //   });

  // editor.

  return editor;
};

function registerLifeCycle(lcName: lifeCycleType) {}

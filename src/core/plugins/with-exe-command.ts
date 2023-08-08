import {  IEditor } from "../types/editor";


// 选区功能
export const withExeCommand =<T extends IEditor>(editor: T) => {
  //   editor.container.addEventListener("selectstart", () => {
  //     document.addEventListener("mouseup", () => {
  //       console.log("select ", window.getSelection()?.anchorNode);
  //     });
  //   });

//   editor.container.addEventListener("selectionchange", (e) => {
//     const sel = window.getSelection();

//     const range = sel?.getRangeAt(0);

//     console.log(range);

//     if (!range) {
//       return;
//     }
//   });



  return editor;
};

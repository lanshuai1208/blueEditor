import { Editor } from "../editor";

// 选区功能
export const widthSelection = <T extends Editor>(editor: T) => {
  //   editor.container.addEventListener("selectstart", () => {
  //     document.addEventListener("mouseup", () => {
  //       console.log("select ", window.getSelection()?.anchorNode);
  //     });
  //   });

  document.addEventListener("selectionchange", (e) => {
    console.log(window.getSelection());
  });

  return editor;
};

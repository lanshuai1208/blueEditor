import { IEditor } from "../types/editor";

// 选区功能
export const withUndoRedo = <T extends IEditor>(editor: T) => {
  editor.undoStack = [];
  editor.redoStack = [];

  editor.update = (htmlStr?: string, reset: boolean = true) => {
    console.log("update", reset);
    if (!htmlStr) {
      return false;
    }
    if (reset) {
      console.log("htmlStr", htmlStr);
      editor.undoStack?.push(htmlStr);
      console.log("editor.undoStack", editor.undoStack);
      console.log("editor.redoStack", editor.redoStack);
      if (editor.undoStack?.length && editor.undoStack?.length > 20) {
        editor.undoStack.shift();
      }
      editor.redoStack = [];
    }

    editor.emit("update", htmlStr);
    return true;
  };

  editor.setValue = (val?: string) => {
    if (!val) {
      return false;
    }
    editor.container && (editor.container.innerHTML = val);
    return true;
  };

  editor.undo = () => {
    if (!editor.undoStack || !editor.redoStack) {
      return false;
    }
    console.log("undo", editor.undoStack, editor.redoStack);
    const top = editor.undoStack?.pop();
    console.log("top", top);
    if (!top) {
      return false;
    }

    editor.redoStack?.push(top);
    const newTop = editor.redoStack[editor.redoStack?.length - 1];
    if (!newTop) {
      return false;
    }
    editor.update(newTop, false);
    editor.setValue(newTop);
    return true;
  };

  editor.redo = () => {
    if (!editor.undoStack || !editor.redoStack) {
      return false;
    }
    console.log("redo", editor.undoStack, editor.redoStack);

    const top = editor.redoStack?.pop();
    if (!top) {
      return false;
    }
    editor.undoStack?.push(top);

    const newTop = editor.redoStack[editor.redoStack?.length - 1];
    if (!newTop) {
      return false;
    }
    editor.update(newTop, false);
    editor.setValue(newTop);
    return true;
  };

  return editor;
};

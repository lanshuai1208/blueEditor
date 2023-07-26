import { widthSelection } from "./plugins/with-selection";
import { IEditorConfig } from "./types";
import { Editor } from "@/core/editor";

function getContainer(selector: string) {
  if (!selector) {
    throw new Error("please input query selector of the container");
  }

  const container = document.querySelectorAll(selector);

  if (!container.length) {
    throw new Error("query selector did not match element");
  }

  if (container.length > 1) {
    throw new Error("query selector matched multiple elements");
  }

  return container[0];
}

export function createEditor(config: Partial<IEditorConfig>) {
  const editor = new Editor(config);

  return widthSelection(editor);
}

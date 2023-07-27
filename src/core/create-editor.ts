import { withDataBind } from "./plugins/with-data-bind";
import { createCoreEditor } from "./create-core-editor";
import { withEmitter } from "./plugins/with-emitter";
import { IEditorConfig, IEditor } from "./types/types";

export function createEditor(cfg: Partial<IEditorConfig>): IEditor {
  const editor = withDataBind(withEmitter(createCoreEditor(cfg)));

  return editor;
}

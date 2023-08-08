import { withLifeCycle } from "./plugins/with-lifecycle";
import { withDataBind } from "./plugins/with-data-bind";
import { createCoreEditor } from "./create-core-editor";
import { withEmitter } from "./plugins/with-emitter";
import { IEditorConfig, IEditor } from "./types/editor";

export function createEditor(cfg: Partial<IEditorConfig>): IEditor {
  const editor = withLifeCycle(withDataBind(createCoreEditor(cfg)));

  return editor;
}

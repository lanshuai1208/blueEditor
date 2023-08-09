// import { widthSelection } from "./plugins/with-selection";
// import { withLifeCycle } from "./plugins/with-lifecycle";
// import { IEditorConfig } from "./types/types";
// import { Editor } from "@/core/editor";

// export function createEditor(config: Partial<IEditorConfig>) {
//   const editor = new Editor(config);

//   return withLifeCycle(widthSelection(editor));
// }

export * from "./create-editor";
export * from "./toolbar/create-toolbar";

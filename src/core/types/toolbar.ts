import { IEditor } from "./editor";

export interface IToolbarConfig {
  selector: string;
  editor?: IEditor;
}

export interface IToolbar {
  container?: Element;
  btns: {};
}

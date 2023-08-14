import { BaseBtn } from "../toolbar/btns/base";
import { IEditor } from "./editor";

export interface IToolbarConfig {
  selector: string;
  editor?: Partial<IEditor>;
}

export interface IToolbar {
  container?: Element;
  btns: BaseBtn[];
  destroy: () => void;
}

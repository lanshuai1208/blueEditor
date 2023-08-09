import { IBaseBtn } from "../toolbar/btns/italic";
import { IEditor } from "./editor";

export interface IToolbarConfig {
  selector: string;
  editor?: Partial<IEditor>;
}

export interface IToolbar {
  container?: Element;
  btns: IBaseBtn[];
}

export interface IEditorConfig {
  selector: string;
  value: string;
  onInput: (value: string) => any;
  inputDebounceDelay: number;
}

export interface IObject {
  [key: string]: any;
}

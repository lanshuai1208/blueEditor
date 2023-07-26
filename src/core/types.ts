export interface IEditorConfig {
  selector: string;
  value: string;
  onInput: (value: string) => any;
}

export interface IObject {
  [key: string]: any;
}

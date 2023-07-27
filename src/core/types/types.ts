import { EventEmitter } from "./../utils/emitter";
export interface IEditorConfig {
  selector: string;
  value: string;
  onInput: (value: string) => any;
  onCreate: (...args: any[]) => any;
  onDestroy: (...args: any[]) => any;
  inputDebounceDelay: number;
}

export interface IObject {
  [key: string]: any;
}

export interface IEditor {
  // base
  // 容器DOM query
  selector: string;
  // 值
  value: string;
  // 输入反馈防抖延迟
  inputDebounceDelay: number;
  // 发布器
  emittier: EventEmitter;
  // 容器DOM
  container?: Element;

  // emitter
  on: (eventName: string, handler: (...args: any[]) => any) => void;
  off: (eventName: string, handler: (...args: any[]) => any) => void;
  emit: (eventName: string, args: any) => void;
}

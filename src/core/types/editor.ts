import { EventEmitter } from "../utils/emitter";
export interface IEditorConfig {
  selector: string;
  value: string;
  onUpdate: (value: string) => any;
  onCreated: (editor: IEditor) => any;
  onMounted: (editor: IEditor) => any;
  onDestroy: (editor: IEditor) => any;
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
  emittier?: EventEmitter;
  // 容器DOM
  container?: Element;

  // undo redo
  undoStack?: string[];
  redoStack?: string[];
  undo: () => boolean;
  redo: () => boolean;

  // emitter
  on: (eventName: string, handler: (...args: any[]) => any) => void;
  off: (eventName: string, handler: (...args: any[]) => any) => void;
  emit: (eventName: string, ...args: any[]) => void;

  // hooks
  onCreated: (...args: any[]) => any;
  onMounted: (...args: any[]) => any;
  onUpdate: (value: string) => any;
  onDestroy: (...args: any[]) => any;
  destroy: () => void;
  update: (htmlStr?: string, reset?: boolean) => boolean;
  setValue: (value?: string) => boolean;
}

export type lifeCycleType = "created" | "beforeDestory" | "update";

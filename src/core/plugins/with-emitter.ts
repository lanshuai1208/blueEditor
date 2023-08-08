import { IEditor } from "../types/editor";
import { EventEmitter } from "../utils/emitter";

// 添加事件触发
export const withEmitter = <T extends IEditor>(editor: T) => {
  editor.emittier = new EventEmitter();
  editor.on = (eventName: string, handler: (...args: any[]) => any) => {
    editor.emittier?.on(eventName, handler);
  };
  editor.off = (eventName: string, handler: (...args: any[]) => any) => {
    editor.emittier?.off(eventName, handler);
  };
  editor.emit = (eventName: string, ...args: any[]) => {
    editor.emittier?.emit(eventName, ...args);
  };
  return editor;
};

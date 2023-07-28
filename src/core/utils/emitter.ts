type handlerType = (data?: any) => any;

interface IHub {
  [eventName: string]: handlerType[];
}

export class EventEmitter {
  private hub: IHub = {};

  constructor() {
    this.hub = {};
  }

  on(eventName: string, event: handlerType) {
    if (!this.hub[eventName]) {
      this.hub[eventName] = [];
    }
    this.hub[eventName].push(event);
  }

  off(eventName: string, event: handlerType) {
    if (!this.hub[eventName]) {
      return false;
    }
    const index = this.hub[eventName].findIndex((handler) => handler === event);
    if (index === -1) {
      return false;
    }
    this.hub[eventName].splice(index, 1);
    return true;
  }

  emit(eventName: string, ...args: any[]) {
    if (!this.hub[eventName]) {
      return false;
    }

    this.hub[eventName].forEach((handler) => {
      handler.call(null, ...args);
    });
  }
}

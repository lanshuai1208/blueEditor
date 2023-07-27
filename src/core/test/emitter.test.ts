import { EventEmitter } from "../utils/emitter";
const consoleSpy = jest.spyOn(console, "log");

const instance = new EventEmitter();
const sayHello = (args: string) => {
  console.log(`hello ${args}`);
};

const sayHello2 = (args: string) => {
  console.log(`hello2 ${args}`);
};

describe("测试事件监听", () => {
  it('测试绑定事件并调用"', () => {
    instance.on("hello", sayHello);
    instance.on("hello", sayHello2);
    instance.emit("hello", "zhangsan");

    expect(consoleSpy).toHaveBeenCalledWith("hello zhangsan");
    expect(consoleSpy).toHaveBeenCalledWith("hello2 zhangsan");
  });

  it('测试删除事件"', () => {
    const noExist = instance.off("hello1", sayHello);
    const exist = instance.off("hello", sayHello);

    expect(noExist).toEqual(false);
    expect(exist).toEqual(true);

    instance.emit("hello", "lisi");

    expect(consoleSpy).not.toHaveBeenCalledWith("hello lisi");
    expect(consoleSpy).toHaveBeenCalledWith("hello2 lisi");
  });
});

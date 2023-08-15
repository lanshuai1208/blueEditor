const colorList = [
  "255,0,0",
  "255,128,0",
  "255,255,0",
  "128,255,0",
  "0,255,0",
  "0,255,255",
  "0,0,255",
  "128,0,255",
  "255,0,255",
  "255,0,128",
];

export class ColorPicker {
  container?: Element;
  pickerContainer?: Element;
  cb?: (color: string) => any;
  pickerItems?: {
    elem: Element;
    event: (e: Event) => void;
  }[];
  color?: string;
  constructor(cfg: { container?: Element; cb?: (color: string) => any }) {
    this.container = cfg.container;
    this.pickerItems = [];
    this.cb = cfg.cb;
    this.render();
  }

  show() {
    this.pickerContainer?.classList.add("show");
    (this.pickerContainer as HTMLElement).focus();
  }

  select(e: Event, color: string) {
    e.stopPropagation();
    this.hide();
    this.cb && this.cb(`rgb(${color})`);
  }

  hide() {
    this.pickerContainer?.classList.remove("show");
  }

  render() {
    this.pickerContainer = document.createElement("div");
    this.pickerContainer.classList.add("color-picker");

    // 如果试图触发div标签绑定的onfocus事件和onblur事件，需要为该标签添加tabindex属性。
    // A, AREA, LABEL, INPUT, SELECT, TEXTAREA, and BUTTON.这些元素不设置tabindex都可以获取焦点，其他元素需要设置tabindex才能获取到焦点
    // 此值也是tab键按下依次获取焦点的顺序
    // https://blog.51cto.com/u_15084268/3809091
    this.pickerContainer.setAttribute("tabindex", "0");

    console.log(this.container, this.pickerContainer);
    this.container?.appendChild(this.pickerContainer);
    this.pickerContainer?.addEventListener("blur", this.hide.bind(this));

    colorList.forEach((color) => {
      const pickerItem = document.createElement("div");
      pickerItem.classList.add("color-picker-item");
      pickerItem.setAttribute("style", `background-color: rgb(${color})`);
      const event = (e: Event) => {
        this.select(e, color);
      };
      pickerItem.addEventListener("click", event);
      this.pickerItems?.push({
        elem: pickerItem,
        event,
      });
      this.pickerContainer?.appendChild(pickerItem);
    });
  }

  destroy() {
    this.pickerContainer?.removeEventListener("blur", this.hide.bind(this));

    this.pickerItems?.forEach((item) => {
      item.elem.removeEventListener("click", item.event);
    });
  }
}

export class ColorPicker {
  container?: Element;
  pickerContainer?: Element;
  constructor(cfg: { container?: Element }) {
    this.container = cfg.container;
    this.render();
    this.pickerContainer?.addEventListener("blur", this.hide.bind(this));
    this.pickerContainer?.addEventListener("click", this.select.bind(this));
  }

  show() {
    this.pickerContainer?.classList.add("show");
    (this.pickerContainer as HTMLElement).focus();
  }

  select(e: Event) {
    e.stopPropagation();
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
  }

  destroy() {
    this.pickerContainer?.removeEventListener("blur", this.hide.bind(this));
    this.pickerContainer?.removeEventListener("click", this.select.bind(this));
  }
}

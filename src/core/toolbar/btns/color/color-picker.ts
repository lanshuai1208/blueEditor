export class ColorPicker {
  container?: Element;
  visible: boolean = true;
  constructor(cfg: { container?: Element }) {
    this.container = cfg.container;
    this.render();
  }

  show() {
    this.visible = true;
    // window.addEventListener('click', )
  }

  hide() {
    this.visible = false;
  }

  render() {
    const pickerContainer = document.createElement("div");
    pickerContainer.classList.add("color-picker");
    console.log(this.container, pickerContainer);
    this.container?.appendChild(pickerContainer);
  }
}

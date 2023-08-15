export class ColorPicker {
  container?: Element;
  constructor(cfg: { container?: Element }) {
    this.container = cfg.container;
    this.render();
  }

  show() {
    this.container?.classList.add('show')

    // this.container && (this.container.style.display = 'block')
    window.addEventListener('click', this.closePicker.bind(this))
  }

  closePicker() {
    this.hide()
  }

  hide() {
    this.container?.classList.remove('show')
    // this.container && (this.container.style.display = 'none')
    window.removeEventListener('click', this.closePicker.bind(this))
  }


  render() {

    const pickerContainer = document.createElement("div");
    pickerContainer.classList.add("color-picker");
    console.log(this.container, pickerContainer);
    this.container?.appendChild(pickerContainer);
  }
}

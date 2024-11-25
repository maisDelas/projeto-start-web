export default class Verticalslider {
  constructor(config) {
    this.wrap = document.querySelector(config.wrap)
    this.element = document.querySelector(config.element)
    this.items = document.querySelectorAll(config.items)
    this.init()
  }
  init() {
    this.progress = 0
    this.speed = 0
    this.oldY = 0
    this.y = 0
    this.playRate = 0

    this.bindings()
    this.events()
    this.calculate()
    this.raf()
  } 

  bindings() {
    ;[
      "events",
      "calculate",
      "raf",
      "handleWheel",
      "move",
      "handleTouchStart",
      "handleTouchEnd",
      "handleTouchMove",
    ].forEach((method) => {
      this[method] = this[method].bind(this)
    })
  }

  calculate() {
    let totalGap= 0;

    this.items.forEach(item => {
      const itemStyles = window.getComputedStyle(this.wrap)
      const gapStylesFormatted = itemStyles.getPropertyValue("gap")
        .replace(/[^0-9]/g, '')
      const gapNumber= Number(gapStylesFormatted)

      totalGap+= gapNumber
    })

    this.wrapHeight = this.items[0].clientHeight * this.items.length + totalGap
    this.progress = 0
    this.wrap.style.height = `${this.wrapHeight}px`
    this.maxScroll = this.wrapHeight + totalGap - this.el.clientHeight
  } 
  handleTouchStart(e) {
    e.preventDefault()
    this.draggable = true

    if (e instanceof MouseEvent) {
      this.y_0 = e.clientY
    } else {
      this.y_0 = e.touches[0].clientY
    }
  }

  handleTouchMove(e) {
    if (!this.draggable) return;

    let x
    if (e instanceof MouseEvent) {
      y = e.clientY;
    } else {
      y = e.touches[0].clientY;
    }

    this.progress += (this.y_0 - y) * 2.5;
    this.y_0 = y;
    this.move();
  }


  handleTouchEnd() {
    this.draggable = false
  } 
}

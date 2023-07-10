(function (w, d) {
  'use strict'
  w.onload = function () {

  /**
 * Function appendChild helper
 * @param {...*} e
 */
  const append = function (e) {
    const arrg = arguments
    for (let i = 1; i < arrg.length; i++) e.appendChild(arrg[i])
  }

  /**
 * Function setAttribute helper
 * @param {...*} e
 */
  const atribute = function (e) {
    const arrg = arguments
    for (let i = 1; i < arrg.length; i += 2) e.setAttribute(arrg[i], arrg[i + 1])
  }

  /**
 * Function createElement helper
 * @param {string} e
 */
  const element = function (e) { return d.createElement(e) }

  // get config from window.IGConfig
  const getConfig = typeof w['IGConfig'] !== 'undefined' && w['IGConfig'] // eslint-disable-line

  //add link CSS to head
  const resource = element('link')
  atribute(resource, 'rel', 'stylesheet', 'href', 'data:text/css;base64,QC13ZWJraXQta2V5ZnJhbWVzIGxve3Rvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBsb3t0b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fWJvZHl7b3ZlcmZsb3c6aW5oZXJpdCFpbXBvcnRhbnQ7bWFyZ2luOjB9I2ltYWc3e3VzZXItc2VsZWN0Om5vbmU7YmFja2dyb3VuZDojMDAwO2NvbG9yOiM3Nzc7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDo5OTk5OTl9I2ltYWc3ICosI2ltYWc3IDo6YWZ0ZXIsI2ltYWc3IDo6YmVmb3Jle2ZvbnQ6MTJweC80IHNhbnMtc2VyaWY7cG9zaXRpb246YWJzb2x1dGU7Ym94LXNpemluZzpib3JkZXItYm94O21hcmdpbjowfS50cmF7dHJhbnNpdGlvbjouMXMgdHJhbnNmb3JtfS5oZGl7dHJhbnNmb3JtOnNjYWxlKDApfS5mZmZ7b3ZlcmZsb3c6aGlkZGVuIWltcG9ydGFudH0uZHBue2Rpc3BsYXk6bm9uZX0udzEwe2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9I2luc2k3e3RleHQtYWxpZ246Y2VudGVyfS5vcGF7b3BhY2l0eTouN30uYnV0OjphZnRlciwuYnV0OjpiZWZvcmV7Y29udGVudDoiIn0uYm9yLC5icmE6OmFmdGVyLC5icmI6OmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkICNmZmZ9LmJ1dHtiYWNrZ3JvdW5kOnJnYmEoNzcsNzcsNzcsLjIpO2hlaWdodDo0OHB4O3dpZHRoOjQ4cHg7Ym9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyOjB9LmJ1dDpmb2N1cywuYnV0OmhvdmVyLC5odnI6aG92ZXIsLmh2cjpob3ZlciBidXR0b257YmFja2dyb3VuZDpyZ2JhKDcsNyw3LC4xKTtvdXRsaW5lOjA7b3BhY2l0eToxO2N1cnNvcjpwb2ludGVyfSNsZWZ0NzphY3RpdmUgI2lsZWY3LCNyaWd0NzphY3RpdmUgI2lyaWc3LC5idXQ6YWN0aXZle29wYWNpdHk6LjN9I2Zvb3Q3LCNvbm93N3t0ZXh0LWluZGVudDo1MHB4O3doaXRlLXNwYWNlOm5vd3JhcDtib3R0b206MjRweDtoZWlnaHQ6NDhweH0jYWx0czd7cmlnaHQ6NTBweH0jYWx0czcsI2luc2k3LCNpbnNpNyBpbWcsI3N0YXQ3e21heC1oZWlnaHQ6MTAwJTttYXgtd2lkdGg6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZX0jbGVmdDcsI3JpZ3Q3e3dpZHRoOjIwJTttaW4td2lkdGg6OTZweDtoZWlnaHQ6MTAwJX0jaWxlZjc6OmFmdGVyLCNpcmlnNzo6YWZ0ZXJ7cGFkZGluZzo5cHg7dG9wOjE0cHh9I2luc2k3IGltZywudHJue3RvcDo1MCU7ei1pbmRleDotMTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9LnJ0cDo6YWZ0ZXIsLnJ0cDo6YmVmb3Jley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnJ0bTo6YWZ0ZXJ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfSNpbGVmNzo6YWZ0ZXJ7Ym9yZGVyLXdpZHRoOjJweCAwIDAgMnB4O2xlZnQ6MTRweH0jaXJpZzc6OmFmdGVye3JpZ2h0OjE0cHg7Ym9yZGVyLXdpZHRoOjJweCAycHggMCAwfSNsZWZ0Nzpob3ZlciAjaWxlZjc6OmFmdGVye2xlZnQ6OXB4fSNyaWd0Nzpob3ZlciAjaXJpZzc6OmFmdGVye3JpZ2h0OjlweH0jY2xvczc6OmFmdGVyLCNjbG9zNzo6YmVmb3Jle2JvcmRlci13aWR0aDowIDAgMCAycHg7aGVpZ2h0OjMwcHg7bGVmdDoyM3B4O3RvcDoxMHB4fSNwbGF5Nzo6YmVmb3JlLCNzcG57Ym9yZGVyLXJhZGl1czo1MCU7aGVpZ2h0OjI0cHg7d2lkdGg6MjRweH0jc3Buey13ZWJraXQtYW5pbWF0aW9uOmxvIC4zcyBsaW5lYXIgaW5maW5pdGU7YW5pbWF0aW9uOmxvIC4zcyBsaW5lYXIgaW5maW5pdGU7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50ICNhYWE7bGVmdDo1MCU7bWFyZ2luOi0xMnB4IDAgMCAtMTJweDt0b3A6NTAlfSNkb3duN3t6LWluZGV4Oi0xO3BvaW50ZXItZXZlbnRzOm5vbmU7Ym9yZGVyLXJhZGl1czowIDAgMnB4IDJweDt0b3A6MjdweDtoZWlnaHQ6NnB4O3dpZHRoOjI0cHg7Ym9yZGVyLXRvcDowfSNwbGF5Nzo6YmVmb3Jle3RyYW5zaXRpb246LjJzIGJvcmRlci1yYWRpdXM7dG9wOjEycHh9I3BsYXk3LmF0Yzo6YmVmb3Jle2JvcmRlci1yYWRpdXM6NHB4fSNwbGF5Nzo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50ICNmZmY7Ym9yZGVyLXdpZHRoOjVweCAwIDVweCAxMnB4O2xlZnQ6MTlweDt0b3A6MTlweDt3aWR0aDoxMHB4fSNwbGF5Ny5hdGM6OmFmdGVye2JvcmRlci13aWR0aDowIDJweDtwYWRkaW5nLXRvcDoxMHB4fSN3ZG93Nzo6YWZ0ZXJ7Ym9yZGVyLXdpZHRoOjAgMCAycHggMnB4O2JvdHRvbToyMXB4O2hlaWdodDoxMnB4O2xlZnQ6MThweDt3aWR0aDoxMnB4fSN3ZG93Nzo6YmVmb3Jle2JhY2tncm91bmQ6I2ZmZjtoZWlnaHQ6MThweDtsZWZ0OjIzcHg7dG9wOjlweDt3aWR0aDoycHh9I2ltYWc3LC50cG97dG9wOjB9I2ltYWc3LC5sZnR7bGVmdDowfS5yZ3R7cmlnaHQ6MH0jY2xvczd7dG9wOjI0cHh9I2Rvd243LCNwbGF5Nzo6YmVmb3Jle2xlZnQ6MTJweH0jY2xvczcsI2lyaWc3LCNvbm93N3tyaWdodDoyNHB4O3RleHQtYWxpZ246cmlnaHR9I2Zvb3Q3LCNpbGVmN3tsZWZ0OjI0cHh9')
  append(d.getElementsByTagName('head')[0], resource)

  // create object of image gallery
  const IG = {}

  IG.folder = getConfig['folder'] || 'x/' // eslint-disable-line
  IG.extension = getConfig['extension'] || ''
  IG.imageContainer = getConfig['imageContainer'] || 'gall7' // eslint-disable-line
  IG.timer = isFinite(getConfig['delaySeconds']) ? getConfig['delaySeconds'] * 1000 : 1700 // eslint-disable-line
  IG.showButtonsOnPlay = typeof getConfig['showButtonsOnPlay'] === 'undefined' ? true : !!getConfig['showButtonsOnPlay'] // eslint-disable-line
  IG.showButtons = typeof getConfig['showButtons'] === 'undefined' ? true : !!getConfig['showButtons'] // eslint-disable-line
  IG.imagesArray = []// all elements array
  IG.isAutoPlayOn = false
  IG.isActive = false
  IG.indexOfImage = 0
  IG.timeOut = 0
  IG.clos = element('button')
  IG.ilef = element('button')
  IG.irig = element('button')
  IG.imag = element('div')
  IG.cent = element('div')
  IG.left = element('div')
  IG.rigt = element('div')
  IG.insi = element('div')
  IG.spin = element('div')

  atribute(IG.clos, 'id', 'clos7', 'class', 'bra brb rtm rtp opa but', 'aria-label', 'Close', 'title', 'Press Esc to close')
  atribute(IG.ilef, 'id', 'ilef7', 'class', 'bra rtm opa trn but')
  atribute(IG.irig, 'id', 'irig7', 'class', 'bra rtp opa trn but')
  atribute(IG.cent, 'id', 'cent7', 'class', 'tpo lft w10')
  atribute(IG.rigt, 'id', 'rigt7', 'class', 'tpo rgt hvr', 'aria-label', 'Next')
  atribute(IG.left, 'id', 'left7', 'class', 'tpo lft hvr', 'aria-label', 'Previous')
  atribute(IG.imag, 'id', 'imag7', 'class', 'hdi fff w10 tra', 'style', 'display:none')
  atribute(IG.spin, 'id', 'spn', 'class', 'dpn')
  atribute(IG.insi, 'id', 'insi7', 'class', 'w10')
  append(IG.rigt, IG.irig)
  append(IG.left, IG.ilef)
  append(IG.cent, IG.insi, IG.rigt, IG.left, IG.clos, IG.spin)
  append(IG.imag, IG.cent)
  append(d.body, IG.imag)// append document fragment to <body>

  // autoplay method loop
  IG.autoPlayLoop = function () {
    this.isAutoPlayOn = true
    if (this.showButtons) this.play.className = 'but tpo lft bra brb opa atc'

    this.timeOut = setTimeout(function () {
      this.right().show()
      // hide buttons if specified in config
      if (!this.showButtonsOnPlay) {
        this.left.className = this.rigt.className = this.clos.className = 'dpn'
        if (this.showButtons) this.foot.className = this.onow.className = 'dpn'
      }
      this.indexOfImage === this.imagesArray.length - 1 && this.clear()
    }.bind(this), this.timer)
  }

  // autoplay and image loaded helper to remove class 'loader'
  IG.loadComplete = function () {
    // remove class spn (loader)
    //if(this.imgs.complete && this.imgs.naturalHeight !== 0) 
    this.spin.className = 'dpn'
    // if autoplay is set loop from images
    this.isAutoPlayOn && this.autoPlayLoop()
  }

  // downloads method
  IG.downloads = function () {
    // create link
    const a = element('a') 
    // this.onow.dataset.selected = fileName
    atribute(a, 'rel', 'noopener', 'download', this.imgs.src.split('/').pop(), 'href', this.imgs.src, 'target', '_blank')
    a.click()
    a.remove()
  }

  // to left button method loop from images index
  IG.lefts = function () {
    if (this.indexOfImage > 0) this.indexOfImage--
    else this.indexOfImage = this.imagesArray.length - 1
    return this
  }

  // to right button method loop from images index
  IG.right = function () {
    if (this.indexOfImage < this.imagesArray.length - 1) this.indexOfImage++
    else this.indexOfImage = 0
    return this
  }

  // clear method to reset all values
  IG.clear = function () {
    clearTimeout(this.timeOut)
    this.isAutoPlayOn = false
    if (this.showButtons) {
      this.foot.className = this.onow.className = ''
      this.play.className = 'but tpo lft bra brb opa'
    }
    if(!this.showButtonsOnPlay) 
    this.clos.className = 'but bra brb rtm rtp opa'
    this.leftRigthBtnsShow()
    return this
  }

  // method on close
  IG.close = function () {
    this.imag.className = 'hdi w10 tra'
    this.isActive = false

    // change class name to old class name without 'fff' and trim leading spaces      
    d.documentElement.className = d.documentElement.className.split('fff').join('').trim()
    // changing style with class name
    // d.body.style.overflow = 'visible'// back to initial state of overflow
  }

  // left right buttons show/check method
  IG.leftRigthBtnsShow = function () {
    this.left.className = this.indexOfImage === 0 ? 'dpn' : 'tpo lft hvr'
    this.rigt.className = this.indexOfImage === this.imagesArray.length - 1 ? 'dpn' : 'tpo rgt hvr'
  }

  // show image method to show image when loaded and recreating image element
  IG.show = function () {
    const index = this.imagesArray[this.indexOfImage]
    const imageSource = index.src
    const fileName = imageSource.split('/').pop()
    const arrayFileName = fileName.split(".")
    const fileNameWithExtension = arrayFileName[0] +'.'+(this.extension || arrayFileName[1])
    const fullNamePrefixed = arrayFileName === 'svg' ? imageSource : imageSource.replace(fileName, this.folder + fileNameWithExtension)
    
    // don't rewrite values if active and set active gallery
    if (!this.isActive) {
      this.isActive = true
      setTimeout(function(){
        d.documentElement.className = d.documentElement.className ? d.documentElement.className + ' fff' : 'fff'
        //remove transition 'tra' maybe better performance
        this.imag.className = 'fff w10'
      }.bind(this),90)
      // changing style with class
      // d.body.style.overflow = 'hidden'// hide scrollbar
      this.imag.className = 'fff w10 tra'
    }
    // show index and filename trying to load
    if (this.showButtons) {
      this.alts.innerText = arrayFileName[1] === 'svg' ? arrayFileName.join('.') : fileNameWithExtension
      this.fine.innerText = Number(this.indexOfImage) + 1
    }
    // if there is already image and src is same return and don't recreate
    if (this.imgs && (this.imgs.src === imageSource || this.imgs.src === fullNamePrefixed)) return false
     
    // if image exist remove and later recreate it
    this.insi.getElementsByTagName('img').length > 0 && this.insi.removeChild(this.imgs)
    // add spn class when loading image src
    this.spin.className = 'bor'
    // show lft right buttons and bottom information (file name and index)
    this.leftRigthBtnsShow()


    // create new image element
    if (arrayFileName[1] === 'svg') {
      this.imgs = index.cloneNode()
      // remove existing attributes of image element because it will not apply any styling
      // console.time()
      while(this.imgs.attributes.length > 0 && !this.imgs.getAttribute('src'))
      this.imgs.removeAttribute(this.imgs.attributes[0].name)
      // this.imgs.removeAttribute('class')
      // this.imgs.removeAttribute('id')
      // console.timeEnd()
    }

    else this.imgs = element('img')
    
    // set image alt attribute
    // atribute(this.imgs, 'id', index.alt)

    // image onerror methods
    this.imgs.onerror = function (e) {
      // throw new Error('Image error: ' + e.message)
      e.target.onerror = null // escape from infinite loop
      e.target.src = imageSource // set same img source
    }
    
    // image onload methods
    this.imgs.onload = function (e) {
      this.loadComplete()
      //the real image loaded successfully file name
      const theRealFileName = this.imgs.src
      if(fullNamePrefixed !== theRealFileName) 
      this.alts.innerText = theRealFileName.split('/').pop()
    }.bind(this)

    setTimeout(function(){
      // append image to div
      append(this.insi, this.imgs)      
    }.bind(this),99)

    // change source only if it's not svg
    if(arrayFileName[1] !== 'svg')
    // set image src if svg return full name else try to load big image
    this.imgs.src = fullNamePrefixed

  }

  // listen for clicked on image element and load show method
  IG.listenForIG = function (e) {
    const target = e.target
    if (target.tagName === 'IMG') {
      this.indexOfImage = this.imagesArray.indexOf(target) > -1 ? this.imagesArray.indexOf(target) : 0// set image index on click
      this.show()
      e.stopImmediatePropagation()
    }
  }

  // assign container elements with custom or (default = images-container) class or BODY (default = BODY)
  const container = d.getElementsByClassName(IG.imageContainer).length > 0
    ? d.getElementsByClassName(IG.imageContainer)
    : [d.body]

  // const containersArray = []
  // for (let l = container.length - 1; l >= 0; l--) containersArray.push(container[l])

  // Loop from elements and add to array
  for (let i = container.length - 1; i >= 0; i--) {
    const img = container[i].getElementsByTagName('img')
    for (let j = 0; j < img.length; j++) IG.imagesArray.push(img[j])
  }
  if (container[0] && container[0].tagName === 'BODY') d.body.onclick = function (e) { IG.listenForIG(e) }
  else for (let k = container.length - 1; k >= 0; k--) container[k].onclick = function (e) { IG.listenForIG(e) }

  // show download and autoplay buttons if (true = default)
    if (IG.showButtons) {
      IG.wdow = element('button')
      IG.play = element('button')
      IG.foot = element('div')
      IG.onow = element('div')
      IG.alts = element('span')
      IG.fine = element('span')
      IG.down = element('span')
      atribute(IG.play, 'id', 'play7', 'class', 'tpo lft bra brb opa but')
      atribute(IG.down, 'id', 'down7', 'class', 'bor')
      atribute(IG.wdow, 'id', 'wdow7', 'class', 'tpo rgt bra rtm opa but')
      atribute(IG.alts, 'id', 'alts7', 'class', 'fff')
      IG.foot.id='foot7'
      IG.onow.id='onow7'
      IG.fine.id='stat7'
      append(IG.onow, IG.alts, IG.wdow)
      append(IG.imag, IG.onow, IG.foot)
      append(IG.foot, IG.play, d.createTextNode(IG.imagesArray.length + '('), IG.fine, d.createTextNode(')'))
      append(IG.wdow, IG.down)
      // atribute(IG.wdow, 'aria-label', 'Download')
      // atribute(IG.play, 'aria-label', 'Play')
    }

    /** @suppress {missingProperties} */
  const k = {
    'play7': function () { IG.isAutoPlayOn ? IG.clear() : IG.autoPlayLoop() }, // eslint-disable-line
    'left7': function () { IG.clear().lefts().show() }, // eslint-disable-line
    'rigt7': function () { IG.clear().right().show() }, // eslint-disable-line
    'clos7': function () { IG.clear().close() }, // eslint-disable-line
    'wdow7': function () { IG.clear().downloads() } // eslint-disable-line
  }
  // add methods for arrow keys to k object
  k[' '] = k['play7'] // eslint-disable-line
  k['ArrowLeft'] = k['left7'] // eslint-disable-line
  k['ArrowRight'] = k['rigt7'] // eslint-disable-line
  k['Escape'] = k['clos7'] // eslint-disable-line

  function switcher (e) {
    if (!IG.isActive || e.isComposing || e.key === 229) return
    // event key or target id
    const ev = e.key || e.target.id
    if (k[ev]) k[ev]() 
    else IG.clear()
    e.preventDefault()
    e.stopImmediatePropagation()
  }

  // everything to handle swipe left/right
  // https://code-maven.com/swipe-left-right-vanilla-javascript

  let startXPos
  let startYPos
  let startTime

  function touchStart (event) {
    startXPos = event.touches[0].pageX
    startYPos = event.touches[0].pageY
    startTime = new Date()
  }

  function touchEnd (event) {
    const endXPos = event.changedTouches[0].pageX
    const endYPos = event.changedTouches[0].pageY
    const endTime = new Date()
    const moveX = endXPos - startXPos
    const moveY = endYPos - startYPos
    const elapsedTime = endTime - startTime
    if (Math.abs(moveX) > 30 && Math.abs(moveY) < 30 && elapsedTime < 1000) {
      if (moveX < 0) k['rigt7']() // eslint-disable-line
      else k['left7']() // eslint-disable-line
    }
    event.stopImmediatePropagation()
  }
  IG.imag.addEventListener('touchstart', touchStart, { passive: true })
  IG.imag.addEventListener('touchend', touchEnd)
  // add keyup addEventListener to image div (gallery window)
  w.addEventListener('keyup', switcher)
  // add click onclick event to image div (gallery window)
  IG.imag.onclick = switcher
  // just hack for not displaying black box fading on load
  setTimeout(function() {atribute(this.imag, 'style', 'display:block')}.bind(IG),220)
}
})(window, document)

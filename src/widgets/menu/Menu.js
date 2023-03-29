import { Lightning, Router, Utils } from '@lightningjs/sdk'
import { Icon } from './Icon'
export class Menu extends Lightning.Component {
  static _template() {
    return {
      // y: 495,//595
      y: 595, //495
      Background: {
        rect: true,
        w: 800,
        h: 110,
        x: 960,
        y: 540,
        mount: 0.5,
        color: 0x99000000,
        src: Utils.asset('images/background.png'),
        flex: {
          direction: 'row',
          justifyContent: 'space-evenly',
        },
        Video: {
          type: Icon,
          page: 'video',
          src: Utils.asset('images/video-w.png'),
        },
        Home: {
          type: Icon,
          page: 'home',

          src: Utils.asset('images/home-w.png'),
        },
        User: {
          type: Icon,
          page: 'user',
          src: Utils.asset('images/user-w.png'),
        },
      },
      Arrow: {
        x: 960,
        y: 400,
        mount: 0.5,
        src: Utils.asset('images/up-arrow.png'),
      },
    }
  }
  _init() {
    this.index = 0
  }

  _handleLeft() {
    if (this.index == 0) {
      return
    }
    this.index--
  }

  _handleRight() {
    if (this.index == this.tag('Background').children.length - 1) {
      return
    }
    this.index++
  }

  _handleEnter() {
    Router.focusPage()
    Router.navigate(this.getCurrentIcon().page)
    // if (this.index == this.tag('Background').children.length - 1) { return }
    // this.index++;
  }

  _handleDown() {
    Router.focusPage()
  }
  _handleKey() {}

  _getFocused() {
    return this.getCurrentIcon()
  }

  getCurrentIcon() {
    return this.tag('Background').children[this.index]
  }

  _focus() {
    this.patch({
      smooth: {
        y: 495,
      },
      Arrow: {
        rotation: Math.PI,
      },
    })
  }

  _unfocus() {
    this.patch({
      smooth: { y: 595 },
      Arrow: { rotation: 0 },
    })
  }
}

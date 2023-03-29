import { Lightning, Router, Utils } from '@lightningjs/sdk'
import { Icon } from './Icon'
export class Menu extends Lightning.Component {
  static _template() {
    return {
      Background: {
        rect: true,
        w: 800,
        h: 100,
        x: 960,
        y: 980,
        mount: 0.5,
        color: 0x99000000,
        src: Utils.asset('../../../static/images/background.png'),
        flex: {
          direction: 'row',
          justifyContent: 'space-evenly',
        },
        Video: {
          type: Icon,
          page: 'video',
          src: Utils.asset('../../../static/images/video-w.png'),
        },
        Home: {
          type: Icon,
          page: 'home',

          src: Utils.asset('../../../static/images/home-w.png'),
        },
        Profile: {
          type: Icon,
          page: 'profile',
          src: Utils.asset('../../../static/images/user-w.png'),
        },
      },
      Arrow: {
        x: 960,
        y: 400,
        mount: 0.5,
        src: Utils.asset('../../static/images/up-arrow.png'),
      },
    }
  }
}

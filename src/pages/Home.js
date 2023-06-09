import { Lightning, Utils, Router } from '@lightningjs/sdk'

export class Home extends Lightning.Component {
  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        rect: true,
        color: 0xffdea6f4,
      },
      Title: {
        x: 960,
        y: 50,
        mount: 0.5,
        text: {
          text: 'Home',
          fontSize: 64,
        },
      },
      Logo: {
        x: 960,
        y: 540,
        mount: 0.5,
        src: Utils.asset('images/logo.png'),
      },
    }
  }

  // _handleEnter() {
  //     Router.navigate('about')
  // }
  _handleEnter() {
    Router.navigate('about', { message: "Hello ABOUT PAGE, from the home page. Here's your data" })
  }
  //   _handleUp() {
  //     Router.navigate('video', { message: "Hello Video PAGE, from the home page. Here's your data" })
  //   }
  pageTransition() {
    return 'up'
  }
  _handleBack() {
    //this.historyState
  }
  _handleUp() {
    Router.focusWidget('Menu')
    //this.historyState
  }
  set params(data) {
    this.message = data.message
    console.log({ data: this.message })
    // alert(data.message);
  }
}

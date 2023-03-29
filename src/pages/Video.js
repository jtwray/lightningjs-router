import { Lightning, Utils, Router } from '@lightningjs/sdk'

export class Video extends Lightning.Component {
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
          text: 'Video',
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
  // _handleRight() {
  //     Router.navigate('Profile', { message: 'Hello Profile PAGE, from the Video page. Here\'s your data' })
  // }

  _handleUp() {
    Router.navigate('profile', {
      message: "Hello Profile PAGE, from the home page. Here's your data",
    })
  }
  pageTransition() {
    return 'up'
  }

  set params(data) {
    this.message = data.message
    console.log({ data: this.message })
    // alert(data.message);
  }
}

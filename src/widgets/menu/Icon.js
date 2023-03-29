import { Lightning, Utils } from '@lightningjs/sdk'

export class Icon extends Lightning.Component {
  static _template() {
    return {
      y: 10,
      // text: {
      //     text: this.bindProp('page')
      // }
    }
  }
  // _init() {
  //     this.patch({
  //         src: this.iconSrc
  //     })
  // }
  _focus() {
    this.patch({
      src: Utils.asset('images/' + this.page + '-o.png'),
    })
  }
  _unfocus() {
    this.patch({
      src: Utils.asset('images/' + this.page + '-w.png'),
    })
  }
}

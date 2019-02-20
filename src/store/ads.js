import * as actions from './actions';
import mutations from './mutations';
import * as src from './image.json';
export default {
  state: {
    showSpinner: false,
    errorMesage: '',
    list: [
      {
        name: 'SmartTV',
        price: '1000',
        description: '42"',
        imgUrl: src.imgUrl1
      },
      {
        name: 'iMac',
        price: '1800',
        description: "27''",
        imgUrl: src.imgUrl2
      },
      {
        name: 'iPhone',
        price: '500',
        description: '6S',
        imgUrl: src.imgUrl3
      }
    ]
  },
  mutations,
  actions
}

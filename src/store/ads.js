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
        imgUrl: src.imgUrl1,
        value: 2
      },
      {
        name: 'iMac',
        price: '1800',
        description: "27''",
        imgUrl: src.imgUrl2,
        value: 4
      },
      {
        name: 'iPhone',
        price: '500',
        description: '6S',
        imgUrl: src.imgUrl3,
        value: 5
      },
      {
        name: 'iMac',
        price: '1800',
        description: "27''",
        imgUrl: src.imgUrl2,
        value: 3
      },
      {
        name: 'SmartTV',
        price: '1000',
        description: '42"',
        imgUrl: src.imgUrl1,
        value: 2
      },
      {
        name: 'iPhone',
        price: '500',
        description: '6S',
        imgUrl: src.imgUrl3,
        value: 1
      },
      {
        name: 'SmartTV',
        price: '1000',
        description: '42"',
        imgUrl: src.imgUrl1,
        value: 3
      },
      {
        name: 'iMac',
        price: '1800',
        description: "27''",
        imgUrl: src.imgUrl2,
        value: 5
      },
      {
        name: 'iPhone',
        price: '500',
        description: '6S',
        imgUrl: src.imgUrl3,
        value: 4
      },
      {
        name: 'iMac',
        price: '1800',
        description: "27''",
        imgUrl: src.imgUrl2,
        value: 2
      },
      {
        name: 'SmartTV',
        price: '1000',
        description: '42"',
        imgUrl: src.imgUrl1,
        value: 5
      },
      {
        name: 'iPhone',
        price: '500',
        description: '6S',
        imgUrl: src.imgUrl3,
        value: 2
      }
    ]
  },
  mutations,
  actions
}

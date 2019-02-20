import * as types from './mutations_types';
import * as src from './image.json';

export const getProducts = ({ commit }, payload) => {
  commit(types.GET_PRODUCTS)
  setTimeout(() => {
    const data = [
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
    commit(types.GET_PRDUCTS_SUCCESS, data)
  }, 500)
};

export const createProduct = ({ commit }, payload) => {
  commit(types.CREATE_PRODUCT)
  setTimeout(() => {
    const data = {
      ...payload,
      id: Math.random()
    }
    commit(types.CREATE_PRODUCT_SUCCESS, data)
  }, 1000)
};

export const removeEl = ({ commit }, index) => {
  commit(types.REMOVE_PRODUCT)
  setTimeout(() => {
    commit(types.REMOVE_PRODUCT_SUCCESS, index)
  }, 2000)
};

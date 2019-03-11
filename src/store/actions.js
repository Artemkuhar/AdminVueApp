import * as types from './mutations_types';
// import axios from 'axios';
import list from '../store/image.json'

export const getProducts = async ({ commit }, payload) => {
  commit(types.GET_PRODUCTS)
  // function getProductsApi () {
  //   return axios.get(url)
  //     .then(res => res)
  //     .catch(err => {
  //       return console.log('error')
  //     })
  // }
  try {
    const res = list.list
    setTimeout(() => {
      commit(types.GET_PRDUCTS_SUCCESS, res)
    }, 300)
  } catch (err) {
    console.log('error')
  }
}

export const createProduct = ({ commit }, payload) => {
  commit(types.CREATE_PRODUCT)
  setTimeout(() => {
    const data = {
      ...payload,
      id: Math.random()
    }
    commit(types.CREATE_PRODUCT_SUCCESS, data)
  }, 500)
}

export const removeProducts = ({ commit }, index) => {
  commit(types.REMOVE_PRODUCT)
  setTimeout(() => {
    commit(types.REMOVE_PRODUCT_SUCCESS, index)
  }, 500)
}

export const sendSelectItem = ({ commit }, selectItems) => {
  commit(types.GET_PRODUCTS)
  commit(types.GET_PRODUCTS_SELECT, selectItems)
}

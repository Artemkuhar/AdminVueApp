import * as types from './mutations_types';

export const getProducts = ({ commit }, payload) => {
  commit(types.GET_PRODUCTS)
  setTimeout(() => {
    commit(types.GET_PRDUCTS_SUCCESS)
  }, 500)
}

export const createProduct = ({ commit }, payload) => {
  commit(types.CREATE_PRODUCT)
  setTimeout(() => {
    const data = {
      ...payload,
      id: Math.random()
    }
    commit(types.CREATE_PRODUCT_SUCCESS, data)
  }, 1000)
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

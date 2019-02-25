import * as types from './mutations_types';


export const getProducts = ({ commit }, payload) => {
  commit(types.GET_PRODUCTS)
  setTimeout(() => {
    const data = []
    commit(types.GET_PRDUCTS_SUCCESS, data)
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

export const removeEl = ({ commit }, index) => {
  commit(types.REMOVE_PRODUCT)
  setTimeout(() => {
    commit(types.REMOVE_PRODUCT_SUCCESS, index)
  }, 2000)
}

export const sendSelectItem = ({ commit }, selectItems) => {
  commit(types.GET_PRODUCTS)
  setTimeout(() => {
    commit(types.GET_PRODUCTS_SELECT, selectItems)
  }, 2000)
}

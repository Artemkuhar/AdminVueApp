import * as types from './mutations_types';
export default {
  [types.GET_PRODUCTS] (state) {
    state.showSpinner = true
  },
  [types.GET_PRDUCTS_SUCCESS] (state) {
    state.showSpinner = false
  },
  [types.GET_PRDUCTS_FAILURE] (state, payload) {
    state.showSpinner = false
    state.errorMesage = payload.error
  },
  [types.CREATE_PRODUCT] (state) {
    state.showSpinner = true
  },
  [types.CREATE_PRODUCT_SUCCESS] (state, payload) {
    payload.value = 3
    state.list.unshift(payload)
    state.showSpinner = false
  },
  [types.CREATE_PRODUCT_FAILURE] (state, payload) {
    state.showSpinner = false
    state.errorMesage = payload.error
  },
  [types.REMOVE_PRODUCT] (state) {
    state.showSpinner = true
  },
  [types.REMOVE_PRODUCT_SUCCESS] (state, payload) {
    state.list.splice(payload, 1)
    state.showSpinner = false
  },
  [types.REMOVE_PRODUCT_FAILURE] (state, payload) {
    state.showSpinner = false
    state.errorMesage = payload.error
  },
  [types.GET_PRODUCTS_SELECT] (state, payload) {
    state.showSpinner = false
    state.selectItems = payload
  }
}

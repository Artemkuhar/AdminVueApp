import * as actions from './actions'
import mutations from './mutations'
export default {
  state: {
    showSpinner: false,
    errorMesage: '',
    selectItems: [],
    list: []
  },
  mutations,
  actions
}

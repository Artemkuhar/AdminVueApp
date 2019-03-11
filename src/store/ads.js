import * as actions from './actions';
import mutations from './mutations';
import * as src from './image.json';
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

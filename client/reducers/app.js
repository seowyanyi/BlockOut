import assign from 'object-assign';
let constants = require('../../imports/constants.js');

// Example state tree: 
// {
//   currentUser: 'Yan Yi',
// }

export default function app(state={}, action) {
  switch (action.type) {
    case constants.UPDATE_APP_STATUS:
      return assign({}, state, action.app)
    default:
      return state
  }
}


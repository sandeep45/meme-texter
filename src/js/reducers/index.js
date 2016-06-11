import { combineReducers } from 'redux'

import entities from './entities.js'
import message from './message.js'

const rootReducer = combineReducers({
  entities,
  message,
});

export default rootReducer

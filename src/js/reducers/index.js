import { combineReducers } from 'redux'

import entities from './entities.js'
import message from './message.js'
import phoneNumbers from './phoneNumbers.js'
import pagination from './pagination.js'

const rootReducer = combineReducers({
  entities,
  message,
  phoneNumbers,
  pagination
});

export default rootReducer

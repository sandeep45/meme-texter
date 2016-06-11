import { combineReducers } from 'redux'

import entities from './entities.js'
import message from './message.js'
import messages from './messages.js'

const rootReducer = combineReducers({
  entities,
  message,
  messages
});

export default rootReducer

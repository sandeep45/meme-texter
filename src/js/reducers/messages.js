import K from "../constants/"

const initialSate = [];

const messages = (state=initialSate, action) => {
  switch(action.type){

    case K.RECEIVE_NEW_MESSAGE:
      return state.concat(action.message)

    case K.RECEIVE_MESSAGES:
      return action.messages

    default:
      return state
  }
}
export default messages

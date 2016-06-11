import axios from "axios";

import K from "../constants/"
import { getAllMessages, addMessage } from "../config/WebUtil.js"

export const receiveNewMessage = (message) => {
  return {
    type: K.RECEIVE_NEW_MESSAGE,
    message
  }
};

export const receiveMessages = (messages) => {
  return {
    type: K.RECEIVE_MESSAGES,
    messages
  }
};

export const addNewMessage = () => {
  return (dispatch, getState) => {
    const state = getState();

    const body = state.message.instanceImageUrl;
    const tag = state.message.tag;
    const text = state.message.text;
    const direction = "outgoing";
    const phone_number_id = state.phoneNumbers.find( item => item.number == state.message.to ).id

    addMessage(body, direction, phone_number_id, tag, text).then(
      (response) => {
        dispatch(receiveNewMessage(response))
      },
      (response) => {
        alert("failed to add number: ", response);
      }
    );
  }
};

export const fetchMessages = () => {
  return (dispatch) => {
    getAllMessages().then(
      (response) => {
        dispatch(receiveMessages(response))
      },
      (response) => {
        alert("failed to fetch messages: ", response);
      }
    );
  }
};



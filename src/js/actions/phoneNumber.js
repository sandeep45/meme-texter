import axios from "axios";
import _ from "lodash";

import K from "../constants/"
import { addPhoneNumber, getAllPhoneNumbers, deletePhoneNumber } from "../config/WebUtil.js"

export const receiveNewNumber = (response) => {
  return {
    type: K.RECEIVE_NEW_NUMBER,
    response
  }
}

export const addNumber = (name, number) => {
  return (dispatch, getState) => {
    const state = getState();
    const currentIndex = _.values(state.entities.phoneNumbers).findIndex( (item) => (item.number == number) && (item.name == name))
    if(currentIndex == -1){
      return addPhoneNumber(name, number).then(
        (response) => {
          dispatch(receiveNewNumber(response))
          return Promise.resolve();
        },
        (response) => {
          alert("failed to add number: ", response);
          return Promise.reject();
        },
      );
    }else{
      console.log("already have this phone number nothing more to do here");
      return Promise.resolve();
    }

  }
}

export const receivePhoneNumbers = (response) => {
 return {
    type: K.RECEIVE_PHONE_NUMBERS,
    response
  }
}

export const fetchPhoneNumbers = () => {
  return (dispatch) => {
    getAllPhoneNumbers().then(
      (response) => {
        dispatch(receivePhoneNumbers(response))
      },
      (response) => {
        alert("failed to receive phone book: ", response);
      },
    );
  }
}

export const successDeletePhoneNumber = (id) => {
 return {
    type: K.SUCCESS_DELETE_PHONE_NUMBER,
    id
  }
}

export const initiatePhoneNumberDeletion = (id) => {
  return (dispatch) => {
    deletePhoneNumber(id).then(
      (response) => {
        dispatch(successDeletePhoneNumber(id))
      },
      (response) => {
        alert("failed to delete phone number: ", response);
      },
    );
  }
}




import axios from "axios";

import K from "../constants/"
import { getVariousImages, build, send } from "../config/WebUtil.js"
import {splitTextInToTwo} from '../config/helpers.js'
import { addNewMessage } from "./messages.js"
import { addNumber } from "./phoneNumber.js"

export const flashTheNotification = () => {
  return (dispatch) => {
    dispatch(showNotification());
    window.setTimeout(() => {
      dispatch(hideNotification());
    }, 2000);
  }
}

export const showNotification = () => {
  return {
    type: K.SHOW_NOTIFICATION
  }
};

export const hideNotification = () => {
  return {
    type: K.HIDE_NOTIFICATION
  }
};

export const updateMessage = (attributes) => {
  return {
    type: K.UPDATE_MESSAGE,
    attributes
  }
};

export const updateVariousImages = (variousImages) => {
  return {
    type: K.UPDATE_VARIOUS_IMAGES,
    variousImages
  }
};

export const updateInstanceImageUrl = (instanceImageUrl) => {
  return {
    type: K.UPDATE_INSTANCE_IMAGE_URL,
    instanceImageUrl
  }
};

export const updateSelectedPreviewItem = (imageId, generatorId) => {
  return {
    type: K.UPDATE_SELECTED_PREVIEW_ITEM,
    imageId,
    generatorId
  }
}

export const doSearch = (tag) => {
  let thunk = (dispatch) => {

    return getVariousImages(tag).then(
      (data) => {
        dispatch(updateVariousImages(data));
      },
      (errorMessage) => {
        alert(`error searching: ${errorMessage}`);
      }
    )
  };
  thunk.meta = {
    debounce: {
      time: 250,
      key: 'doSearch'
    }
  };
  return thunk;
};

export const buildInstance = (imageId, generatorId, text0, text1) => {
  return (dispatch, getState) => {
    const state = getState();
    const {to} = state;
    return build(imageId, generatorId, text0, text1);
  }
};

export const doSendingOfMessage = () => {
  return (dispatch, getState) => {
    const state = getState();

    const {imageId, generatorId} = state.message.selectedPreviewItem;
    const {to, name, text} = state.message;
    const [text0, text1] = splitTextInToTwo(text);

    dispatch(
      buildInstance(imageId, generatorId, text0, text1)
    ).
    then(
      (response) => {
        dispatch(updateInstanceImageUrl(response));
        return Promise.resolve()
        // return send(to, response)
      },
      (response) => {
        alert(`error building image instance: ${response}`);
        return Promise.reject();
      }
    ).
    then(
      (response) => {
        dispatch(flashTheNotification());
        dispatch(addNumber(name, to));
        dispatch(addNewMessage());
      },
      (response) => {
        alert(`error sending message: ${response}`);
      }
    )


  }
}


import keyMirror from "keymirror"

var appConstants = keyMirror({
  UPDATE_MESSAGE: null,
  UPDATE_VARIOUS_IMAGES: null,
  UPDATE_INSTANCE_IMAGE_URL: null,
  UPDATE_SELECTED_PREVIEW_ITEM: null,

  SHOW_NOTIFICATION: null,
  HIDE_NOTIFICATION: null,

  RECEIVE_PHONE_NUMBERS: null,
  RECEIVE_NEW_NUMBER: null,
  SUCCESS_DELETE_PHONE_NUMBER: null,

  RECEIVE_NEW_MESSAGE: null,
  RECEIVE_MESSAGES: null
});

export default appConstants;

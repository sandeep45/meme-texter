import React, { PropTypes, Component } from 'react'

import { connect } from 'react-redux'

import {doSendingOfMessage} from '../actions/'

const mapStateToProps = (state, ownProps) => {
  return { };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickOfSendButton: () => {
      console.log("send button has been clicked. doing sending of message ");
      dispatch(doSendingOfMessage());
    }
  }
};

let SendMessage = (props) => {
  const {onClickOfSendButton} = props;

  return (
    <div className="panel-panel-default">
      <div className="panel-body">
        <input type="button" className="btn btn-success btn-lg"
          onClick={onClickOfSendButton}
          value="Send SMS Message"
        />
      </div>
    </div>
  );
}

SendMessage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SendMessage);

export default SendMessage;


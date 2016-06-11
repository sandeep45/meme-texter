import { connect } from 'react-redux'

import MessageList from '../components/MessageList.js'
import {fetchMessages} from '../actions'
import * as helpers from '../config/helpers'

const mapStateToProps = (state, ownProps) => {

  const selectedPhoneNumber = ownProps.params.phone_number;

  const selectedPhoneNumberRecord = helpers.getRecordByAttributeAndValue(
    state.phoneNumbers, "number", selectedPhoneNumber
  );

  return {
    caption: `Messages with ${selectedPhoneNumberRecord.number}`,
    messages: selectedPhoneNumberRecord.messages.sort((a,b) => b.id - a.id),
    phoneNumbers: state.phoneNumbers
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    refresh: () => {
      dispatch(fetchMessages());
    }
  }
};

const AllMessages = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);

export default AllMessages;


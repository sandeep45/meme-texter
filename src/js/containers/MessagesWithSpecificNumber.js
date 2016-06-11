import { connect } from 'react-redux'

import MessageList from '../components/MessageList.js'
import {fetchMessages} from '../actions'
import * as helpers from '../config/helpers'
import _ from "lodash";

const mapStateToProps = (state, ownProps) => {

  const selectedPhoneNumber = ownProps.params.phone_number;
  const allNumbers = _.values(state.entities.phoneNumbers)

  const selectedPhoneNumberRecord = helpers.getRecordByAttributeAndValue(
    allNumbers, "number", selectedPhoneNumber
  );

  const associatedMessagIds = selectedPhoneNumberRecord.messages

  return {
    caption: `Messages with ${selectedPhoneNumberRecord.number}`,
    messages: associatedMessagIds.map(id => state.entities.messages[id]).sort((a,b) => b.id - a.id),
    phoneNumbers: allNumbers
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


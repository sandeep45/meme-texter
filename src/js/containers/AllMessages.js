import { connect } from 'react-redux'

import MessageList from '../components/MessageList.js'
import {updateMessage, initiatePhoneNumberDeletion, fetchMessages} from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    messages: state.messages.sort((a,b) => b.id - a.id),
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


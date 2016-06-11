import { connect } from 'react-redux'

import MessageForm from '../components/MessageForm.js'
import {doSearch,updateMessage} from '../actions'



const mapStateToProps = (state, ownProps) => {
  return {
    to : state.message.to,
    name: state.message.name,
    text: state.message.text,
    tag: state.message.tag
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchMemeTemplates: (tag) => {
      dispatch(doSearch(tag));
    },
    updateMessage: (attributes) => {
      dispatch(updateMessage(attributes));
    }
  }
};

const CurrentMessage = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm);

export default CurrentMessage;


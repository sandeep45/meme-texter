import React from 'react';

import AllMessages from '../containers/AllMessages.js'
import AllPhoneNumbers from '../containers/AllPhoneNumbers.js'
import CurrentMessage from '../containers/CurrentMessage.js'
import CurrentPreviewLine from '../containers/CurrentPreviewLine.js'
import MessageNotification from '../containers/MessageNotification.js'
import SendMessage from '../containers/SendMessage.js'

const Dashboard = (props) => {
  return(
    <div>
      <AllPhoneNumbers />
      <CurrentMessage />
      <CurrentPreviewLine />
      <MessageNotification />
      <SendMessage />
    </div>
  )
}

export default Dashboard


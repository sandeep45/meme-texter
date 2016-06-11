import React from "react"
import { Route, IndexRoute } from "react-router"

import App from "./components/App"
import Dashboard from "./components/Dashboard"
import PhoneNumbersMain from "./containers/PhoneNumbersMain.js"
import AllMessges from "./containers/AllMessages.js"
import MessagesWithSpecificNumber from "./containers/MessagesWithSpecificNumber.js"


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="/phone_numbers" component={PhoneNumbersMain} />
    <Route path="/messages" component={AllMessges} />
    <Route path="/phone_numbers/:phone_number/messages" component={MessagesWithSpecificNumber} />
  </Route>
);

export default routes;

import React from "react"
import { Route, IndexRoute } from "react-router"

import App from "../containers/App"
import Dashboard from "../components/Dashboard"
import PaginatedPhoneNumbers from "../containers/PaginatedPhoneNumbers.js"
import AllPhoneNumbers from "../containers/AllPhoneNumbers.js"
import AllMessges from "../containers/AllMessages.js"
import MessagesWithSpecificNumber from "../containers/MessagesWithSpecificNumber.js"


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="/paginated_phone_numbers" component={PaginatedPhoneNumbers} />
    <Route path="/all_phone_numbers" component={AllPhoneNumbers} />
    <Route path="/messages" component={AllMessges} />
    <Route path="/phone_numbers/:phone_number/messages" component={MessagesWithSpecificNumber} />
  </Route>
);

export default routes;

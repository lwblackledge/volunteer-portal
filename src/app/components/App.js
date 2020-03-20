import React from "react";
import HelloMessage from "./HelloMessage";
import ServerTime from "./ServerTime";

import '../assets/styles/app.scss';

export default class App extends React.Component {
  render() {
      return (
        <div>
          <HelloMessage name="Volunteer" /><br />
          <ServerTime />
        </div>);
  }
}

import authContext from "../../context/context.js";
import React from "react";

class Hey extends React.Component {
  render() {
    return (
      <authContext.Consumer>
        {(context) => {
          return <div>{context.hey}</div>;
        }}
      </authContext.Consumer>
    );
  }
}
export default Hey;

import React, { Fragment } from "react";
import Header from "components/Header";
import Products from "components/Products";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="main">
          <Header nickname="Admin" />
          <div className="container">
            <Products />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;

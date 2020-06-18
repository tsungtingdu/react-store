import React, { Fragment } from "react";
import Header from "components/Header";
import Product from "components/Product";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="main">
          <Header />
          <Product />
        </div>
      </Fragment>
    );
  }
}

export default App;

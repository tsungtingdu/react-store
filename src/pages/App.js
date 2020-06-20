import React, { Fragment } from "react";
import Products from "components/Products";
import Layout from "Layout";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <Products />
        </div>
      </Layout>
    );
  }
}

export default App;

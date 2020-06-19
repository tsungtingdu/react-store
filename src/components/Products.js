import React, { Fragment } from "react";
import axios from "commons/axios";
import ToolBox from "components/ToolBox";
import Product from "components/Product";

class Products extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios.get("/products").then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }

  render() {
    return (
      <Fragment>
        <div>
          <ToolBox />
          <div className="products">
            <div className="columns is-multiline is-desktop">
              {this.state.products.map((d) => {
                return (
                  <div className="column is-3" key={d.id}>
                    <Product product={d} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Products;

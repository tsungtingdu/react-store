import React, { Fragment } from "react";
import axios from "commons/axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ToolBox from "components/ToolBox";
import Product from "components/Product";

class Products extends React.Component {
  state = {
    products: [],
    sourceProducts: [],
  };

  componentDidMount() {
    axios.get("/products").then((res) => {
      this.setState({
        products: res.data,
        sourceProducts: res.data,
      });
    });
  }
  search = (text) => {
    let _products = [...this.state.sourceProducts];

    _products = _products.filter((d) => {
      const matchArr = d.name.match(new RegExp(text, "gi"));
      return !!matchArr;
    });

    this.setState({
      products: _products,
    });
  };
  render() {
    return (
      <Fragment>
        <div>
          <ToolBox search={this.search} />
          <div className="products">
            <div className="columns is-multiline is-desktop">
              <TransitionGroup component={null}>
                {this.state.products.map((d) => {
                  return (
                    <CSSTransition
                      classNames="product-fade"
                      timeout={300}
                      key={d.id}
                    >
                      <div className="column is-3" key={d.id}>
                        <Product product={d} />
                      </div>
                    </CSSTransition>
                  );
                })}
              </TransitionGroup>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Products;

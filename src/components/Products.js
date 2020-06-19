import React, { Fragment } from "react";
import axios from "commons/axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ToolBox from "components/ToolBox";
import Product from "components/Product";
import Panel from "components/Panel"; // rendering panel in global
import AddInventory from "components/AddInventory";

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

  toAdd = () => {
    Panel.open({
      component: AddInventory,
      callback: (data) => {
        if (data) {
          this.add(data);
        }
      },
    });
  };
  add = (product) => {
    const _product = [...this.state.products];
    _product.push(product);
    const _sProducts = [...this.state.sourceProducts];
    _sProducts.push(product);
    this.setState({
      products: _product,
      sourceProducts: _sProducts,
    });
  };
  update = (product) => {
    // update products
    const _product = [...this.state.products];
    const _index = _product.findIndex((d) => d.id === product.id);
    _product.splice(_index, 1, product);
    // update source products
    const _sProducts = [...this.state.sourceProducts];
    const _sIndex = _sProducts.findIndex((d) => d.id === product.id);
    _sProducts.splice(_sIndex, 1, product);
    this.setState({
      products: _product,
      sourceProducts: _sProducts,
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
                        <Product product={d} update={this.update} />
                      </div>
                    </CSSTransition>
                  );
                })}
              </TransitionGroup>
            </div>
            <button className="button is-primary add-btn" onClick={this.toAdd}>
              add
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Products;

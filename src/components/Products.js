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
    cartNum: 0,
  };

  componentDidMount() {
    axios.get("/products").then((res) => {
      this.setState({
        products: res.data,
        sourceProducts: res.data,
      });
    });
    this.updateCartNum();
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
  delete = (id) => {
    const _products = this.state.products.filter((d) => d.id !== id);
    const _sProducts = this.state.sourceProducts.filter((d) => d.id !== id);
    this.setState({
      products: _products,
      sourceProducts: _sProducts,
    });
  };
  updateCartNum = async () => {
    let cartNum = await this.initCartNum();
    this.setState({ cartNum: cartNum });
  };

  initCartNum = async () => {
    const res = await axios.get("/carts");
    const carts = res.data || [];
    const cartNum = carts
      .map((d) => d.mount)
      .reduce((a, value) => a + value, 0);
    return cartNum;
  };
  render() {
    return (
      <Fragment>
        <div>
          <ToolBox search={this.search} cartNum={this.state.cartNum} />
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
                        <Product
                          product={d}
                          update={this.update}
                          delete={this.delete}
                          updateCartNum={this.updateCartNum}
                        />
                      </div>
                    </CSSTransition>
                  );
                })}
              </TransitionGroup>
            </div>
            {(global.auth.getUser() || {}).type === 1 && (
              <button
                className="button is-primary add-btn"
                onClick={this.toAdd}
              >
                add
              </button>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Products;

import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";

class ToolBox extends React.Component {
  state = {
    searchText: "",
  };
  handleChange = (event) => {
    // event.preventDefault();
    const value = event.target.value;
    this.setState({
      searchText: value,
    });
    this.props.search(value);
  };
  clearSearchText = () => {
    this.setState({
      searchText: "",
    });
    this.props.search("");
  };
  goCart = () => {
    if (!global.auth.isLogin()) {
      this.props.history.push("/login");
      toast.warning("Please login");
      return;
    }
    this.props.history.push("/cart");
  };
  render() {
    return (
      <Fragment>
        <div className="tool-box">
          <div className="logo-text">Store</div>
          <div className="search-box">
            <div className="field has-addons">
              <div className="controle">
                <input
                  type="text"
                  className="input search-input"
                  placeholder="search product"
                  value={this.state.searchText}
                  onChange={this.handleChange}
                />
              </div>
              <div className="control">
                <button className="button" onClick={this.clearSearchText}>
                  x
                </button>
              </div>
            </div>
          </div>
          {/* <Link to="/cart" className="cart-box">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-number">{this.props.cartNum}</span>
          </Link> */}
          <div to="/cart" className="cart-box" onClick={this.goCart}>
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-number">{this.props.cartNum}</span>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(ToolBox);

import React, { Fragment } from "react";

class ToolBox extends React.Component {
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
                />
              </div>
              <div className="control">
                <button className="button">x</button>
              </div>
            </div>
          </div>
          <div className="cart-box">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-number">(0)</span>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ToolBox;

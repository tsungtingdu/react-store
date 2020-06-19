import React, { Fragment } from "react";
import { render } from "react-dom";

class Panel extends React.Component {
  state = {
    active: false,
    component: null,
    callback: () => {},
  };

  close = (data) => {
    this.setState({
      active: false,
    });
    this.state.callback(data);
  };
  open = (
    options = {
      component: null,
      callback: () => {},
      props: {},
    }
  ) => {
    const { props, component, callback } = options;
    const _key = new Date().getTime();
    const _component = React.createElement(component, {
      ...props,
      close: this.close,
      key: _key,
    });
    this.setState({
      active: true,
      component: _component,
      callback: callback,
    });
  };
  render() {
    const _class = {
      true: "panel-wrapper active",
      false: "panel-wrapper",
    };
    return (
      <div className={_class[this.state.active]}>
        {/* <div className="over-layer" onClick={this.close}> */}
        {/* avoid calling function when the parameter is not defined  */}
        <div
          className="over-layer"
          onClick={() => {
            this.close();
          }}
        ></div>
        <div className="panel">
          <div className="head">
            <span
              className="close"
              onClick={() => {
                this.close();
              }}
            >
              ×
            </span>
            {this.state.component}
          </div>
        </div>
      </div>
    );
  }
}

const _div = document.createElement("div");
document.body.appendChild(_div);
const _panel = render(<Panel />, _div); //ReactDOM.render()
export default _panel;

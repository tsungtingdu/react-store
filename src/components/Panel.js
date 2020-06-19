import React, { Fragment } from "react";
import { render } from "react-dom";

class Panel extends React.Component {
  state = {
    active: false,
  };

  close = () => {
    this.setState({
      active: false,
    });
  };
  open = () => {
    this.setState({
      active: true,
    });
  };

  render() {
    const _class = {
      true: "panel-wrapper active",
      false: "panel-wrapper",
    };
    return (
      <div className={_class[this.state.active]}>
        <div className="over-layer" onClick={this.close}>
          <div className="panel">
            <div className="head">
              <span className="close" onClick={this.close}>
                x
              </span>
              <p className="has-text-centered">Children Component</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const _div = document.createElement("div");
document.body.appendChild(_div);
const _panel = render(<Panel />, _div);
export default _panel;

import React, { Fragment } from "react";
import Panel from "components/Panel";
import EditInventory from "components/EditInventory";
import axios from "commons/axios";
import { toast } from "react-toastify";

class Product extends React.Component {
  toEdit = () => {
    Panel.open({
      component: EditInventory,
      props: {
        product: this.props.product,
        deleteProduct: this.props.delete,
      },
      callback: (data) => {
        if (data) this.props.update(data);
      },
    });
  };
  addCart = async () => {
    try {
      const { id, name, image, tags, price, status } = this.props.product;
      const res = await axios.get(`/carts?productId=${id}`);
      const carts = res.data;
      console.log(carts);
      if (carts && carts.length > 0) {
        const cart = carts[0];
        cart.mount += 1;
        await axios.put(`/carts/${cart.id}`, cart);
      } else {
        const cart = {
          productId: id,
          name,
          image,
          price,
          mount: 1,
        };
        await axios.post("/carts", cart);
      }
      toast.success("Add to cart successfully!");
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };
  render() {
    const { name, image, tags, price, status } = this.props.product;
    const _pClass = {
      available: "product",
      unavailable: "product out-stock",
    };
    return (
      <Fragment>
        <div className={_pClass[status]}>
          <div className="p-content">
            <div
              className="p-head has-text-right"
              onClick={() => {
                this.toEdit();
              }}
            >
              <span className="icon out-btn">
                <i className="fas fa-sliders-h"></i>
              </span>
            </div>
            <div className="img-wrapper">
              <div className="out-stock-text">Out of Stock</div>
              <figure className="image is4by3">
                <img src={image} alt={name} />
              </figure>
            </div>
            <p className="p-tags">{tags}</p>
            <p className="p-name">{name}</p>
          </div>
          <div className="p-footer">
            <p className="price">{price}</p>
            <button
              className="add-cart"
              disabled={status === "unavailable"}
              onClick={this.addCart}
            >
              <i className="fas fa-shopping-cart"></i>
              <i className="fas fa-exclamation"></i>
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Product;

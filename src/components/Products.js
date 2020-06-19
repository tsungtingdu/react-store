import React, { Fragment } from "react";
import ToolBox from "components/ToolBox";
import Product from "components/Product";

class Products extends React.Component {
  products = [
    {
      id: 1,
      name: "Shoes",
      tags: "color",
      image: "images/1.jpg",
      price: 199,
      status: "available",
    },
    {
      id: 2,
      name: "Shoes",
      tags: "color",
      image: "images/2.jpg",
      price: 299,
      status: "available",
    },
    {
      id: 3,
      name: "Shoes",
      tags: "color",
      image: "images/3.jpg",
      price: 399,
      status: "available",
    },
    {
      id: 4,
      name: "Shoes",
      tags: "color",
      image: "images/4.jpg",
      price: 499,
      status: "available",
    },
    {
      id: 5,
      name: "Shoes",
      tags: "color",
      image: "images/5.jpg",
      price: 599,
      status: "unavailable",
    },
  ];
  render() {
    return (
      <Fragment>
        <div>
          <ToolBox />
          <div className="products">
            <div className="columns is-multiline is-desktop">
              {this.products.map((d) => {
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

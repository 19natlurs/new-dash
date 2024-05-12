import React from "react";
import { Link } from "react-router-dom";

const popularProducts = [
  {
    id: "3432",
    product_name: 'Macbook M1 Pro 14"',
    product_thumbnail: "https://source.unsplash.com/100x100?macbook",
    product_price: "$1499.00",
    product_stock: 341,
  },
  {
    id: "7633",
    product_name: "Samsung Galaxy Buds 2",
    product_thumbnail: "https://source.unsplash.com/100x100?earbuds",
    product_price: "$399.00",
    product_stock: 24,
  },
  {
    id: "6534",
    product_name: "Asus Zenbook Pro",
    product_thumbnail: "https://source.unsplash.com/100x100?laptop",
    product_price: "$899.00",
    product_stock: 56,
  },
  {
    id: "9234",
    product_name: "LG Flex Canvas",
    product_thumbnail: "https://source.unsplash.com/100x100?smartphone",
    product_price: "$499.00",
    product_stock: 98,
  },
  {
    id: "4314",
    product_name: "Apple Magic Touchpad",
    product_thumbnail: "https://source.unsplash.com/100x100?touchpad",
    product_price: "$699.00",
    product_stock: 0,
  },
  {
    id: "4342",
    product_name: "Nothing Earbuds One",
    product_thumbnail: "https://source.unsplash.com/100x100?earphone",
    product_price: "$399.00",
    product_stock: 453,
  },
];

function PopularProduct() {
  return (
    <div className="mt-3 bg-white p-3 border border-gray-400 m-2 ">
      <strong className="text-gray-400 ">Popular Product</strong>
      <div className="flex flex-col  mt-3">
        {popularProducts.map((products) => {
          return (
            <Link
              key={products.id}
              to={`/products/${products.id}`}
              className="hover:no-underline flex flex-row gap-2 sm:p-4 lg:p-0 border-b border-gray-300"
            >
              <div className="h-10 w-10 rounded-sm ">
                <img src={products.product_thumbnail} />
              </div>

              <div className="flex-1 text-gray-700">
                <p>{products.product_name}</p>
                <span
                  className={`${
                    products.product_stock === 0
                      ? "text-red-500"
                      : "text-green-600"
                  }`}
                >
                  {products.product_stock === 0
                    ? "Out of stock"
                    : products.product_stock + "In Stock"}
                </span>
              </div>

              <div className="text-gray-700">{products.product_price}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default PopularProduct;

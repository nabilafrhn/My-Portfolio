import stock  from "../../../stock";
import Swal from "sweetalert2";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { Minus } from "../../../components/Minus";
import { Plus } from "../../../components/Plus";
import Navbar from "../../../components/Navbar";
// import { useShoppingCart } from "@/hooks/use-shopping-cart";

function getProducts(id) {
  const item = stock.find((e) => e.id === Number(id));
  if (typeof item === "object") {
    return item;
  }
  return {};
}

function Detail() {
  const router = useRouter();
  const { slug } = router.query;

  const [qty, setQty] = useState(1);

  const handleAddToCart = (qty) => {
    const product = getProducts(slug);
    const cartItem = { ...product, qty };

    // Get existing cart items from local storage, or create an empty array if it doesn't exist
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    // Add the new item to the cart
    const newCartItems = [...existingCartItems, cartItem];

    // Save the updated cart to local storage
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    Swal.fire({
      title: `${qty} ${product.nama} added to cart!`,
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "View Cart",
      cancelButtonText: "Continue Shopping",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("./checkout");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        router.push("/shop#products");
      }
    });
  };

  function handleBack() {
    router.push("/shop#products");
  }
  const products = getProducts(slug);

  return (
    <>
      <Navbar isSticky={false} />
      <div className="container lg:max-w-screen-lg mx-auto py-24 px-6">
        {Object.keys(products).length > 0 ? (
          <div className="flex  flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
            {/* Product's image */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 mb-40 my-auto">
              <img
                src={products.gambar}
                alt={products.nama}
                layout="fill"
                objectFit="contain"
              />
            </div>

            {/* Product's details */}
            <div className="flex-1 max-w-md border border-opacity-50 rounded-md shadow-lg p-6 mt-80">
              <h2 className="text-3xl font-semibold">{products.nama}</h2>
              <p>
                <span className="text-gray-500">Availability:</span>{" "}
                <span className="font-semibold">In stock</span>
              </p>
              <p className="mt-4">{products.description}</p>

              {/* Price */}
              <div className="mt-8 border-t pt-4">
                <p className="text-gray-500">Price:</p>
                <p className="text-xl font-semibold">{products.harga}</p>
              </div>

              <div className="mt-4 border-t pt-4">
                <p className="text-gray-500">Quantity:</p>
                <div className="mt-1 flex items-center space-x-3">
                  <button
                    onClick={() => setQty((prev) => prev - 1)}
                    disabled={qty <= 1}
                    className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-rose-100 hover:text-rose-500 rounded-md p-1 border-0"
                  >
                    <Minus />
                  </button>
                  <p className="font-semibold text-xl">{qty}</p>
                  <button
                    onClick={() => setQty((prev) => prev + 1)}
                    className="hover:bg-green-100 hover:text-green-500 rounded-md p-1 border-0"
                  >
                    <Plus />
                  </button>
                </div>
                <div className="flex flex-row justify-between">
                  <button
                    type="button"
                    onClick={() => handleAddToCart(qty)}
                    className="mt-8 border rounded py-2 px-6 bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Add to cart ({qty})
                  </button>
                  <button
                    onClick={() => handleBack()}
                    className="mt-8 border rounded py-2 px-6 bg-gray-500 hover:bg-gray-600 border-gray-500 hover:border-gray-600 focus:ring-4 focus:ring-opacity-50 focus:ring-gray-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Kembali
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <h1>Product Not Found</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Detail;

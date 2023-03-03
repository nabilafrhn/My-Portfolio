import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Swal from "sweetalert2";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, []);

  useEffect(() => {
    // Menghitung total harga dari setiap item dalam keranjang
    const cartTotal = cartItems.reduce(
      (acc, item) => acc + item.harga * item.qty,
      0
    );
    setTotal(cartTotal);
  }, [cartItems]);
  // Mengambil data cart dari local storage
  const handleCheckout = () => {
    Swal.fire({
      title: "Checkout Successful!",
      text: "Thank you for your order.",
      icon: "success",
      confirmButtonText: "Back to Home",
    }).then((result) => {
      router.push("/shop");
    });
    localStorage.removeItem("cartItems");
    setCartItems([]);
  };
  console.log(cartItems.length);
  return (
    <>
      <Navbar isSticky={false} />
      <div className="container w-9/12 mx-auto py-24">
        <h1 className="text-3xl font-bold mb-6">Cart</h1>
        {cartItems.length > 0 ? (
          <>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-3 px-6 bg-gray-100 text-left uppercase text-xs font-semibold text-gray-600 border border-gray-300">
                    Gambar
                  </th>
                  <th className="py-3 px-6 bg-gray-100 text-left uppercase text-xs font-semibold text-gray-600 border border-gray-300">
                    Nama
                  </th>
                  <th className="py-3 px-6 bg-gray-100 text-left uppercase text-xs font-semibold text-gray-600 border border-gray-300">
                    Harga
                  </th>
                  <th className="py-3 px-6 bg-gray-100 text-left uppercase text-xs font-semibold text-gray-600 border border-gray-300">
                    Quantity
                  </th>
                  <th className="py-3 px-6 bg-gray-100 text-left uppercase text-xs font-semibold text-gray-600 border border-gray-300">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="py-4 px-6 border border-gray-300">
                      <img
                        src={item.gambar}
                        alt=""
                        className="h-[200px] w-[200px] border mt-[5px] mb-5 rounded-[10px] mx-auto border-solid border-black"
                      />
                    </td>
                    <td className="py-4 px-6 border border-gray-300">
                      {item.nama}
                    </td>
                    <td className="py-4 px-6 border border-gray-300">
                      {item.harga}
                    </td>
                    <td className="py-4 px-6 border border-gray-300">
                      {item.qty}
                    </td>
                    <td className="py-4 px-6 border border-gray-300">
                      {item.qty * item.harga}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex items-baseline py-10 flex-col">
              <h2 className="text-2xl font-bold py-4">
                Total: {total.toLocaleString("id-ID")}
              </h2>
              <button
                onClick={() => handleCheckout()}
                className="border-2 bg-slate-200 px-2 py-2 rounded-lg"
              >
                CheckOut
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center">
            <h1>Product Not Found</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;

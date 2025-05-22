import React, { useMemo } from "react";
import { ShoppingCart, X, Plus, Minus, ArrowRight } from "lucide-react";
import { useCart } from "../../context/CartContext";

const CartPreview = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const shipping = subtotal > 0 ? 0 : 0;
  const total = subtotal + shipping;

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <ShoppingCart className="mr-2 h-5 w-5" />
          Your Cart
        </h2>
        <p className="text-gray-500 mt-1">Review and manage your cart items</p>
      </div>

      {cartItems.length > 0 ? (
        <>
          <div className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <div key={item.id} className="p-4 flex items-center">
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-sm font-medium text-gray-900">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="mt-2 flex items-center">
                    <button
                      className="p-1 text-gray-400 hover:text-gray-500"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="mx-2 text-gray-600">{item.quantity}</span>
                    <button
                      className="p-1 text-gray-400 hover:text-gray-500"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                    <button
                      className="ml-4 p-1 text-red-400 hover:text-red-500"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gray-50 space-y-4">
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Subtotal</p>
              <p className="font-medium text-gray-900">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Shipping</p>
              <p className="font-medium text-gray-900">
                {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
              </p>
            </div>
            <div className="flex justify-between text-base font-medium">
              <p className="text-gray-900">Total</p>
              <p className="text-gray-900">${total.toFixed(2)}</p>
            </div>
            <div className="mt-6">
              <button className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md">
                Checkout
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="p-6 text-center">
          <ShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">Your cart is empty</h3>
          <p className="mt-1 text-sm text-gray-500">
            Start shopping to add items to your cart
          </p>
          <div className="mt-6">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPreview;

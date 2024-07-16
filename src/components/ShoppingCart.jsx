import React, { useState } from "react";
import { useCart } from "../store/ShoppingCartContext";

export default function ShoppingCart() {
  const products = [
    {
      id: 1,
      title: "Banana",
    },
    {
      id: 2,
      title: "Apple",
    },
    {
      id: 3,
      title: "Grapes",
    },
    {
      id: 4,
      title: "mango",
    },
  ];

  const [ updating, setUpdating] = useState(false);

  const { addItem, cartItems, removeItem, updateItem, updateQuantity, updateQtyRemove } = useCart();
  const addItemToCart = (product) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id)
    console.log(product.title + " Added To cart");
    if(existingCartItem) {
      updateQuantity(product)
    } else{
      addItem({...product, quantity:1});

    }
  };

  const increaseQty = (product) =>{
    updateQuantity(product)
  }

  const decreaseQty = (product) =>{
    updateQtyRemove(product)
  }

  const removeItemFromCart = (product) => {
    console.log(product.title + " Removed From cart");
    removeItem(product);
  };

  const updateItemInCart = (product) => {
    console.log(product.quantity + " Updated cart content");
    updateItem(product);
  };
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <>
            <li key={product.id}> {product.title}</li>
            <button onClick={() => addItemToCart(product)}>Add</button>
          </>
        ))}
      </ul>

      <h1> Product In Cart</h1>
      <ul>
        {cartItems?.map((item, index) => (
          <><li key={index}>{item.title} - {item.quantity}</li><button onClick={() => removeItemFromCart(item)}>Remove</button><button onClick={() => increaseQty(item)}>+</button><button onClick={() => decreaseQty(item)}>-</button></>
        ))}
      </ul>
    </div>
  );
}

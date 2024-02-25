import React, { useState } from "react";
import UserInput from "./components/UserInput";
import Data from "./components/Data";
import "./App.css";

export default function App() {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (item) => {
    const trimmedItem = item.trim();

    if (!trimmedItem) {
      alert("Cannot add an empty wish to the wishlist.");
      return;
    }

    setWishlist([...wishlist, trimmedItem]);
  };

  const removeFromWishlist = (index) => {
    const updatedWishlist = wishlist.filter((_, i) => i !== index);
    setWishlist(updatedWishlist);
  };

  const clearAll = () => {
    setWishlist([]);
  };

  return (
    <div className="main">
      <div className="app-container">
        <h1 className="app-title">My Wishlist App</h1>
        <UserInput addToWishlist={addToWishlist} clearAll={clearAll} />
        <Data wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
      </div>
    </div>
  );
}

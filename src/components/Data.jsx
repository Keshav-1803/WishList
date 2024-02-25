import React from "react";

export default function Data({ wishlist, removeFromWishlist }) {
  const list = wishlist.map((item, index) => (
    <li key={index}>
      {item}
      <button className="remove-btn" onClick={() => removeFromWishlist(index)}>
        Remove
      </button>
    </li>
  ));

  return (
    <div className="data-list">
      <h2>Wish List: </h2>
      <ul>{list}</ul>
    </div>
  );
}

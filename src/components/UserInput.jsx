import React, { useState } from "react";

export default function UserInput({ addToWishlist, clearAll }) {
  const [wish, setWish] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addToWishlist(wish);
    setWish("");
  }

  function handleChange(e) {
    e.preventDefault();
    setWish(e.target.value);
  }

  function handleClearAll(e) {
    e.preventDefault();
    clearAll();
  }

  return (
    <>
      <div className="user-input">
        <form onSubmit={handleSubmit} className="input-form">
          <label htmlFor="wish" className="lab">Wish : </label>
          <input
            type="text"
            id="wish"
            value={wish}
            onChange={handleChange}
            className="input-field"
          />
          <button className="update-btn">Update</button>
          <button className="clear-btn" onClick={handleClearAll}>
            Clear All
          </button>
        </form>
      </div>
    </>
  );
}

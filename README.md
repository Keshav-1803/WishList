# My Wishlist App

Welcome to the "My Wishlist App"! This is a simple React application where you can create and manage your wishlist.

The Project Document Can be find of the following Link:
[https://docs.google.com/document/d/1A6Q7OymWIxCuCIw735EstUvL-vbBI-qwLcdcvuILhto/edit]

## Features

- **Add Items to Wishlist:** You can add items to your wishlist by typing them into the input field and clicking the "Add" button. Empty wishes cannot be added, and you will receive an alert if you try to add an empty wish.

- **Remove Items from Wishlist:** Each item in the wishlist is displayed with a "Remove" button. Clicking this button will remove the corresponding item from the wishlist.

- **Clear All Wishes:** If you want to start fresh, there is a "Clear All" button that will remove all items from the wishlist.

## Getting Started

To run this application locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/my-wishlist-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd my-wishlist-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to view the app.

## Usage

1. **Adding Items:**

   - Type the name of the item you wish to add into the input field.
   - Click the "Add" button or press Enter to add the item to your wishlist.

2. **Removing Items:**

   - Each item in the wishlist is displayed with a "Remove" button.
   - Click the "Remove" button next to the item you want to remove from the wishlist.

3. **Clearing All Wishes:**
   - To remove all items from the wishlist, click the "Clear All" button.

## Technologies Used

- React
- useState hook for managing state
- Functional components

## Folder Structure

```
my-wishlist-app/
├── src/
│   ├── components/
│   │   ├── UserInput.js
│   │   ├── Data.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
├── README.md
├── package.json
└── ...
```

## Component Breakdown

1. **App.js**
    - Main component that renders the application layout.
    - The main component of the application.
    - Manages the state of the wishlist and renders the UserInput and Data components.
    
2. **UserInput.jsx**
    - This component renders a form for users to input their wishes.
    - Component for user input to add items to the wishlist.
    - Includes validation to prevent adding empty wishes.
    - Provides a "Clear All" button to clear all wishes.
    
3. **Data.jsx**
    - Component to display the wishlist items and allow removal of items.
    - This component displays the list of wishes.
    - Each wish item has a "Remove" button to delete that specific wish.

### Files

1. **App.js**
    - The main component of the application.
    - Manages the state of the wishlist and renders the UserInput and Data components.
    
2. **UserInput.jsx**
    - This component renders a form for users to input their wishes.
    - Includes validation to prevent adding empty wishes.
    - Provides a "Clear All" button to clear all wishes.
    
3. **Data.jsx**
    - This component displays the list of wishes.
    - Each wish item has a "Remove" button to delete that specific wish.
---

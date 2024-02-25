# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

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

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./components/ErrorPage";
import App from "./App";
import Homepage from "./routes/Homepage";
import Login from "./routes/Login";
import Register from "./routes/Register";
import { AuthProviderComponent } from "./shared/context/AuthContext";
import { ProductsList } from "./components/products/ProductsList";
import Profile from "./routes/Profile";
import Confirm from "./routes/Confirm";
import AddNewProduct from "./routes/AddNewProduct";

import { ProductDetail } from "./routes/ProductDetail.js";
import { ConfirmPurcharse } from "./routes/ConfirmPurcharse";
import { ProfileInfo } from "./components/profile/ProfileInfo";
import { OwnerProviderComponent } from "./shared/context/OwnerContext";
import ScoreVote from "./routes/ScoreVote";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "products/filterBy/id/:filter",
        element: <ProductDetail />,
      },
      {
        path: "products/filterBy/userId/:filter",
        element: <ProductsList />,
      },
      {
        path: "products/filterBy/search/:search",
        element: <ProductsList />,
      },
      {
        path: "products/filterBy/category/:filter",
        element: <ProductsList />,
      },
      {
        path: "products/filterBy/location/:filter",
        element: <ProductsList />,
      },
      {
        path: "products/filterBy/search/:filter",
        element: <ProductsList />,
      },
      {
        path: "products/filterBy/bought",
        element: <ProductsList />,
      },
      {
        path: "products",
        element: <ProductsList />,
      },
      {
        path: "products/add",
        element: <AddNewProduct />,
      },
      {
        path: "likes/filterBy/loverId/:filter",
        element: <ProductsList />,
      },
      {
        path: "profile/info/:id",
        element: <ProfileInfo />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "accounts/confirm/:id",
        element: <Confirm />,
      },
      {
        path: "products/:id/confirm",
        element: <ConfirmPurcharse />,
      },
      {
        path: "users/score/:id",
        element: <ScoreVote />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <OwnerProviderComponent>
    <AuthProviderComponent>
      <RouterProvider router={router} />
    </AuthProviderComponent>
  </OwnerProviderComponent>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

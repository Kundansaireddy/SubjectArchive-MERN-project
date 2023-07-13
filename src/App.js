import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ErrorPage from "./components/ErrorPage";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import Subjects from "./components/Subjects";
import SubjectPage from "./components/SubjectPage";
import NewAdmin from "./components/NewAdmin";
import HomePageAuth from "./authenticated/HomeAuth";
import SubjectsAuth from "./authenticated/SubjectsAuth";
import SubjectPageAuth from "./authenticated/SubjectPageAuth";
import NavBarAuth from "./authenticated/NavBarAuth";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "admin", element: <LoginForm /> },
        { path: "newAdmin", element: <NewAdmin /> },
        { path: ":semester", element: <Subjects /> },
        { path: ":semester/:subject", element: <SubjectPage /> },
      ],
    },
    {
      path: "/auth",
      element: <NavBarAuth />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePageAuth /> },
        { path: ":semester", element: <SubjectsAuth /> },
        { path: ":semester/:subject", element: <SubjectPageAuth /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      <Route />
    </RouterProvider>
  );
};

export default App;

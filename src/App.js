import React from "react";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
function App() {
  const home = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  // cursoer
  
  function  moveCuroser(e) {
    let pointer = document.querySelector(".main-Pointer");
    let x = e.clientX;
    let y = e.clientY;
    pointer.style.top = `${y}px`;
    pointer.style.left = `${x}px`;
  }
  document.addEventListener("mousemove", moveCuroser);
  return (
    <>
      <div class="main-Pointer">
        Take <br /> a look
      </div>
      <RouterProvider router={home} />
    </>
  );
}

export default App;

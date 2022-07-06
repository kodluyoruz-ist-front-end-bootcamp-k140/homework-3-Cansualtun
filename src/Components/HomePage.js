import React from "react";
import "../App.css";
import ToDo from "./ToDo";
import Navbar from "./Navbar";
import Posts from "./Posts";
//Oluşturulan Componentler tek tek render edilerek home pagede olarak tek componenet tasarımı amaçlanmıştır.
function HomePage() {
  return (
    <React.Fragment>
      <Navbar />
      <ToDo />
      <Posts />
    </React.Fragment>
  );
}

export default HomePage;

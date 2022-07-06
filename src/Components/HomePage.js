import React, { useState } from "react";
import "../App.css";
import ToDo from "./ToDo";
import Navbar from "./Navbar";
import { Posts } from "./Posts";
import { Button } from "./Button/Button";
//Oluşturulan Componentler tek tek render edilerek home pagede olarak tek componenet tasarımı amaçlanmıştır.

function HomePage() {
  const [activeTab, setActiveTab] = useState("todo");
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="btn-group tabs" role="group" aria-label="Basic-example">
          <Button
            onClick={() => setActiveTab("post")}
            className={
              activeTab === "post" ? "btn btn-primary" : "btn btn-default"
            }
          >
            Posts
          </Button>
          <Button
            onClick={() => setActiveTab("todo")}
            className={
              activeTab === "todo" ? "btn btn-primary" : "btn btn-default"
            }
          >
            Todo
          </Button>
        </div>
        {activeTab === "todo" ? <ToDo /> : <Posts />}
      </div>
    </>
  );
}

export default HomePage;

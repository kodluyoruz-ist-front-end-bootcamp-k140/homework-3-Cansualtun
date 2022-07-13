import React, { useState, createContext } from "react";
import "../App.css";
import ToDo from "./ToDo";
import Navbar from "./Navbar";
import { Posts } from "./Posts";
import { Button } from "./Button/Button";
import ReactSwitch from "react-switch";

//Oluşturulan Componentler tek tek render edilerek home pagede olarak tek componenet tasarımı amaçlanmıştır.

export const ThemeContext = createContext("null");
function HomePage() {
  const [activeTab, setActiveTab] = useState("todo");
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="App" id={theme}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div className="App" id={theme}>
            <div className="switch">
              <label> {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
            <Navbar />
            <div
              className="btn-group tabs"
              role="group"
              aria-label="Basic-example"
            >
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
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default HomePage;

import React, { useState } from "react";
import { useFetch } from "./Hooks";
import { ThemeContext } from "./contexts/theme";
import { useContext } from "react";

function TableRow(props) {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.title}</td>
      <td>{props.completed ? "Completed" : "To Do"}</td>
    </tr>
  );
}

const TODOS = "https://jsonplaceholder.typicode.com/todos";
const POSTS = "https://jsonplaceholder.typicode.com/posts";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const [activeTab, setActiveTab] = useState("todos");
  const todos = useFetch(TODOS);
  const posts = useFetch(POSTS);

  const renderBody = () => {
    return (
      <React.Fragment>
        {todos.data
          .slice(0, 50)
          .sort((a, b) => a.id - b.id)
          .map((item, index) => {
            return <TableRow key={item.id} {...item} />;
          })}
      </React.Fragment>
    );
  };

  const Button = () => {
    const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
    return (
      <div
        className="Button"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <div className="text">It's a {isDark ? "Dark" : "Light"} theme</div>
        <button type="button" onClick={toggleTheme}>
          Toggle theme
        </button>
      </div>
    );
  };

  const renderTable = () => {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Topic</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>{renderBody()}</tbody>
        </table>
      </>
    );
  };

  const renderPosts = () => {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Topic</th>
            </tr>
          </thead>
          <tbody>{renderPostsBody()}</tbody>
        </table>
      </>
    );
  };
  const renderPostsBody = () => {
    return (
      <React.Fragment>
        {posts.data
          .slice(0, 20)
          .sort((a, b) => b.id - a.id)
          .map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
              </tr>
            );
          })}
      </React.Fragment>
    );
  };

  const renderActiveTab = () => {
    if (activeTab === "todos") {
      return renderTable();
    }

    return renderPosts();
  };
  return (
    <div className="container">
      <div className="btn-group tabs" role="group">
        <button
          onClick={() => setActiveTab("todos")}
          className={
            activeTab === "todos" ? "btn btn-warning" : "btn btn-default"
          }
        >
          Todos
        </button>
        <button
          onClick={() => setActiveTab("posts")}
          className={
            activeTab === "posts" ? "btn btn-warning" : "btn btn-default"
          }
        >
          Posts
        </button>
      </div>

      {todos.loading ? "Yükleniyor..." : renderActiveTab()}
    </div>
  );
}

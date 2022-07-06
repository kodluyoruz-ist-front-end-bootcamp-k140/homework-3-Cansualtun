import React from "react";
import { useFetch } from "../Hooks";

const TODOS = "https://jsonplaceholder.typicode.com/todos";

export default function ToDo() {
  //const [activeTab, setActiveTab] = useState("todos");
  const todos = useFetch(TODOS);

  const TableRow = (props) => {
    return (
      <tr>
        <th scope="row">{props.id}</th>
        <td>{props.title}</td>
        <td>{props.completed ? "Completed" : "To Do"}</td>
      </tr>
    );
  };

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

  return (
    <div className="container">
      {todos.loading ? "Yükleniyor..." : renderTable()}
    </div>
  );
}

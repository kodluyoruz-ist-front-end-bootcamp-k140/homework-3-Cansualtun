import React from "react";

export class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      items: [],
    };
  }
  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    this.setState({ loading: true });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((x) => x.json())
      .then((response) => {
        this.setState({ items: response, loading: false });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ loading: false });
      });
  };
  renderBody = () => {
    return (
      <React.Fragment>
        {this.state.items.slice(0, 50).map((item, index) => {
          return (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.body}</td>
            </tr>
          );
        })}
      </React.Fragment>
    );
  };
  renderTable = () => {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Postlar</th>
            </tr>
          </thead>
          <tbody>{this.renderBody()}</tbody>
        </table>
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        {this.state.loading ? "Loading..." : this.renderTable()}
      </div>
    );
  }
}

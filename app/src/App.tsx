import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import {
  faImage,
  faThumbsUp,
  faThumbsDown,
  faMoneyCheckAlt,
  faSearchDollar,
} from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  state = {
    isLoading: false,
    invoices: [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
      {
        userId: 2,
        id: 2,
        title: "delectus aut autem",
        completed: false,
      },
      {
        userId: 3,
        id: 3,
        title: "delectus aut autem",
        completed: true,
      },
      {
        userId: 4,
        id: 4,
        title: "delectus aut autem",
        completed: false,
      },
    ],
  };

  remove(id: number): void {
    let updatedInvoices = [...this.state.invoices].filter((i) => i.id !== id);
    this.setState({ invoices: updatedInvoices });
  }

  render() {
    const isLoading = this.state.isLoading;
    const allInvoices = this.state.invoices;

    if (isLoading) return <div>Loading...</div>;

    let invoices = allInvoices.map((invoice) => {
      return (
        <tr key={invoice.id}>
          <td>{invoice.userId}</td>
          <td>{invoice.title}</td>
          <td>{invoice.completed}</td>
          <td>{invoice.id}</td>
          <td>
            <Button
              className="btn btn-lg"
              onClick={() => this.remove(invoice.id)}
            >
              Ok
            </Button>
          </td>
          <td>
            <Button
              className="btn btn-lg"
              onClick={() => this.remove(invoice.id)}
            >
              Nok
            </Button>
          </td>
          <td>
            <Button
              className="btn btn-lg"
              onClick={() => this.remove(invoice.id)}
            >
              50%
            </Button>
          </td>
          <td>
            <Button
              className="btn btn-lg"
              onClick={() => this.remove(invoice.id)}
            >
              ??
            </Button>
          </td>
        </tr>
      );
    });

    return (
      <div className="container border border-secondary rouded center">
        <div className="row">
          <div className="col-12">
            <h4>Loading...</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12 center text-center">
            <Table dark responsive striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>User</th>
                  <th>Title</th>
                  <th>Complete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.invoices.length === 0 ? (
                  <td>All caught up!</td>
                ) : (
                  invoices
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
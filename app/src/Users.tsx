import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";

interface User {
  id: number
  name: string
}

export const Users: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const remove = (users: User[], id: number): void => {
    let updatedUsers = [...users].filter((i) => i.id !== id);
    setUsers(updatedUsers);
  }

  const userTableRows = (allUsers: User[]) => {
    return allUsers.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>
            <Button className="btn btn-lg" onClick={() => remove(users, user.id)}>Ok</Button>
          </td>
          <td>
            <Button className="btn btn-lg" onClick={() => remove(users, user.id)}>Nok</Button>
          </td>
          <td>
            <Button className="btn btn-lg" onClick={() => remove(users, user.id)}>50%</Button>
          </td>
          <td>
            <Button className="btn btn-lg" onClick={() => remove(users, user.id)}>??</Button>
          </td>
        </tr>
      );
    });
  }

  useEffect(() => {
    async function getUsers() {
      const res = await fetch("https://lmhl5i1vuj.execute-api.us-east-1.amazonaws.com/dev/users");
      const data = await res.json();
      setUsers(data.Items.map((u: User) => {
        return {
          id: u.id,
          name: u.name
        } as User
      }));
    }

    getUsers();

  }, []);

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
              {users.length === 0 ? (
                <td>All caught up!</td>
              ) : (
                  userTableRows(users)
                )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )

};


import React, { useState, useEffect } from "react";
import base_url from "../service/UserService";
import axios from "axios";

const AllUsers = () => {

  const [users, setUsers] = useState([
    { userId: 1, firstName: "Sandip", lastName: "Salve", email: "salved34@gmail.com" },
    { userId: 2, firstName: "Deepak", lastName: "Salve", email: "salved34@gmail.com" },
    { userId: 3, firstName: "Deepali", lastName: "Salve", email: "salved34@gmail.com" },
  ]);

  useEffect(() => {
    document.title = "All Users || Ecomm Admin";
  }, []);

  // Get all users from backend server
  const getAllUsers = async () => {
    if (!base_url) return;
    try {
      const response = await axios.get(`${base_url}/users/allUsers`);
      if (response && response.data) {
        setUsers(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="container">
      <h3>Users List</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">userId</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
            users.map((u) => (
              <tr key={u.userId}>
                <th scope="row">{u.userId}</th>
                <td>{u.firstName}</td>
                <td>{u.lastName}</td>
                <td>{u.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No Active users</td>
            </tr>
          )}
        </tbody>
      </table>
      <p>All done</p>
    </div>
  );
};

export default AllUsers;
import React from "react";

function ViewUsers({users}) {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">userId</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{users.userId}</th>
            <td>{users.firstName}</td>
            <td>{users.lastName}</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ViewUsers;

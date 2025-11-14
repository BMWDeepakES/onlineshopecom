import React, { useState } from "react";
import ViewUsers from "./ViewUsers";

const AllUsers = () => {
    const [users,setUsers] = useState([
        {userId: 1,firstName:"Sandip",lastName:"Salve",email:"salved34@gmail.com"},
        {userId: 2,firstName:"Deepak",lastName:"Salve",email:"salved34@gmail.com"},
        {userId: 3,firstName:"Deepali",lastName:"Salve",email:"salved34@gmail.com"},
    ]);
    return(
        <div className="container">
           <h3>Users List</h3>
           { users.length > 0 
             ? users.map((user) => 
                <ViewUsers users={user} /> )
              : "No Active users"
           }
           <p>All done</p>
        </div>
    );
}

export default AllUsers;
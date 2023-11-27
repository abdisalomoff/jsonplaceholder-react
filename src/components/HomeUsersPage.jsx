import { useEffect, useState } from "react"

import {Link} from 'react-router-dom'

const HomeUsersPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)

useEffect(() => {
  const getUsers = () => {
    try {
      setLoading(true);
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => setUsers(data))
        .catch((error) => {
          console.error('Error fetching data:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  getUsers();
}, []);


if (loading) {
    return <div className="loading">
        <span className="loader"></span>
    </div>
}

    const mappingUsers = users.map((user)=>(
        <li className="alert alert-primary d-block" key={user.id} style={{ flex: "1 0 400px" }}>
            <Link className="text-decoration-none"  to={`/user/${user.id}/posts`}><h3 className="text-black">{user.name}</h3></Link>
            <p>Email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
            <p className="d-flex">Adress: <address className="ms-1 my-0 fst-italic">{user.address.city}, {user.address.street}</address></p>
            <p>Phone: <a href={`tel:${user.phone}`}>{user.phone}</a></p>
            <p>Website: <a href={`https://${user.website}`} target="blank">{user.website}</a>
            </p>
        </li>
        ))


  return (
    <div className="container">
        <h1 className="text-center my-3">Users</h1>
        <ul className="users-list d-flex column-gap-3 flex-wrap text-content-start mt-3">
        {mappingUsers}
        </ul>
    </div>
  )
}

export default HomeUsersPage
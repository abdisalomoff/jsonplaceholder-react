import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => (
  <li className="alert alert-primary d-block d-grid gap-2" key={user.id} style={{ flex: "1 0 400px" }}>
    <Link className="text-decoration-none" to={`/user/${user.id}/posts`}>
      <h3 className="text-black my-0">{user.name}</h3>
    </Link>

    <p className='my-0'>Email: <a href={`mailto:${user.email}`}>{user.email}</a></p>

    <div className="d-flex">
      Address: <address className="ms-1 my-0 fst-italic">{user.address.city}, {user.address.street}</address>
    </div>

    <p className='my-0'>Phone: <a href={`tel:${user.phone}`}>{user.phone}</a></p>

    <p className='my-0'>Website: <a href={`https://${user.website}`} target="blank">{user.website}</a></p>
  </li>
);

export default UserCard;

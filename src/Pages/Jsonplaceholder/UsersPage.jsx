import { useEffect, useState } from "react";
import UserCard from "../../components/UserCard";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getUsers = () => {
      try {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => setUsers(data))
          .catch((error) => {
            console.error("Error fetching data:", error);
          })
          .finally(() => {
            setLoading(false);
          });
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  const handleSearch = (evt) => setSearch(evt.target.value);
  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });

  /*  Loader  */
  if (loading) {
    return (
      <div className="loading">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className="container" style={{ marginTop: '90px' }}>
      <h1 className="text-center mb-3">Users</h1>
      <input
        onChange={handleSearch}
        value={search}
        className="input form-control py-2 px-4"
        type="text"
        placeholder="Search a user..."
      />
      <ul className="users-list d-flex column-gap-3 flex-wrap mt-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))
        ) : (
          /*  Not found  */
          <p className="mx-auto mt-4">Not Found</p>
        )}
      </ul>
    </div>
  );
  
};

export default UsersPage;

import { useState, useEffect } from "react";

const Crud = () => {
  const initialFormData = {
    userId: "",
    id: "",
    title: "",
    body: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [editID, setEditID] = useState();
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const { userId, id, title, body } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId && id && title && body) {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setData([...data, json]);
          setFormData(initialFormData);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleUpdate = () => {
    if (userId && id && title && body) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${editID}`, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then(() => {
          setFormData(initialFormData);
          setRefresh(refresh + 1);
        })
        .catch((err) => console.log(err));
    }
  };
  

  const handleDelete = (deleteID) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${deleteID}`, {
      method: "DELETE",
    })
      .then(() => {
        setData(data.filter((item) => item.id !== deleteID));
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (editIDNotState) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${editIDNotState}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setFormData(json);
        setEditID(editIDNotState);
      })
      .catch((err) => console.log(err));
  };
  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  return (
    <div className="container" style={{ marginTop: "90px" }}>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h3 className="text-center">Todo</h3>
          <form onSubmit={handleSubmit} className="w-75 mx-auto d-grid gap-2">
            <div className="form-group">
              <label htmlFor="userId">№</label>
              <input
                type="text"
                className="form-control"
                id="userId"
                placeholder="Foydalanuvchi tartib raqami kiriting"
                name="userId"
                value={userId}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="id">ID</label>
              <input
                type="text"
                className="form-control"
                id="id"
                placeholder="ID ni kiriting"
                name="id"
                value={id}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Sarlavha</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Sarlavhani kiriting"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="body">Matn</label>
              <textarea
                className="form-control"
                id="body"
                rows="5"
                placeholder="Matnni kiriting"
                name="body"
                value={body}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Jo'natish
            </button>
            <button
              type="submit"
              className="btn btn-success"
              onClick={() => {
                handleUpdate();
              }}
            >
              Yangilash
            </button>
          </form>

          <hr />

          <table className="table table-striped w-100">
            <thead>
              <tr>
                <th>№</th>
                <th>ID</th>
                <th>Sarlavha</th>
                <th>Matn</th>
                <th>Boshqarish</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.userId}</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td>
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => {handleEdit(item.id);}}
                    >
                      Tahrirlash
                    </button>{" "}
                    <button
                      className="btn btn-danger w-100 mt-2"
                      onClick={() => handleDelete(item.id)}
                    >
                      O'chirish
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Crud;

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"

const PostsPage = () => {

    const {userId} = useParams();
    const [user, setUser] =useState([])
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)

// h1 TITLEDA QAYSI USERNI POSTI EKANLIGI CHIQISH UCHUN ISHLATILDI (optimallashtr!!!
useEffect(() => {
        const getUser = () => {
            try {
                setLoading(true);
                fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                    .then((res) => {
                        if (!res.ok) {
                            throw new Error(`HTTP error! Status: ${res.status}`);
                        }
                        return res.json();
                    })
                    .then((data) => setUser(data))
                    .catch((error) => {
                        console.error('Error fetching user data:', error);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            } catch (error) {
                console.error('Error:', error);
                setLoading(false);
            }
        };

        getUser();
}, [userId]);

useEffect(() => {
  const getPosts = () => {
    try {
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => setPosts(data))
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

  getPosts();
}, [userId]);


if (loading) {
    return <div className="loading">
        <span className="loader"></span>
    </div>
}

const mappingPosts = posts.map((post, index)=>(
    <li className="alert alert-success d-block text-capitalize" key={post.id} style={{ flex: "1 0 400px" }}>
        <h3>{index + 1}. {post.title}</h3>
        <p>{post.body}</p>
        <Link to={`/user/${userId}/posts/${post.id}/comments`}><button className="btn  btn-light">Comment</button></Link>
    </li>
))

  return (
    <>
    <h1 className="text-center my-3">{user.name}`s posts</h1>
   <ul className="container mb-5">
        {mappingPosts}
   </ul>
   </>
  )
}

export default PostsPage
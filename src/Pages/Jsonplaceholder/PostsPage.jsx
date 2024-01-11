import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../../components/PostCard";

const PostsPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

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
            console.error("Error fetching user data:", error);
          })
          .finally(() => {
            setLoading(false);
          });
      } catch (error) {
        console.error("Error:", error);
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

    getPosts();
  }, [userId]);

  if (loading) {
    return (
      <div className="loading">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "90px" }}>
      <h1 className="text-center my-3">{user.name}'s posts</h1>
      <ul className="container mb-5">
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} userId={userId} />
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;

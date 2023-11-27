import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";

export const CommentsPage = () => {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getComments = () => {
      try {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
          .then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => setComments(data))
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

    getComments();
  }, [postId]);

  if (loading) {
    return <div className="loading"><span className="loader"></span></div>;
  }

  const mappingComments = comments.map((comment) => (
    <li className="comments text-capitalize" key={comment.id}>
        <div className="arrow">
    <div className="outer"></div>
    <div className="inner"></div>
  </div>
  <div className="message-body">
  <h4>{comment.name}</h4>
      <p className="fs-5">{comment.body}</p>
      <p className="fs-6 mt-1"><b>Email: </b><a href={`mailto:${comment.email}`}>{comment.email}</a></p>
  </div>
    </li>
  ));

  return (
    <>
    <div className="container mb-5">
        <div className="arrow">
        <div className="outer"></div>
        <div className="inner"></div>
    </div>
    <div className="message-body">
    <h2 className="text-center my-3">Comments for Post {postId}</h2>
      <ul className="d-grid gap-4">
            {mappingComments}
      </ul>
      <Link className="text-decoration-none fs-4" to={`/user/${postId}/posts`}> &#65124; Back to Posts</Link>
    </div>
  </div>
    </>
  );
};

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "../../components/CommentCard";

export const CommentsPage = () => {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const commentsData = await response.json();
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    getComments();
  }, [postId]);

  if (loading) {
    return (
      <div className="loading">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "90px" }}>
      <div className="container mb-5">
        <div className="arrow">
          <div className="outer"></div>
          <div className="inner"></div>
        </div>
        <div className="message-body">
          <h2 className="text-center my-3">Comments for Post {postId}</h2>
          <ul className="d-grid gap-4">
            {comments.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

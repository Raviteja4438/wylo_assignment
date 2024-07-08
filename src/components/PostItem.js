import React from 'react'
import { useNavigate } from 'react-router-dom'

const PostItem = ({ post, onEdit, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    onEdit(post);
    navigate(`/edit/${post.id}`);
  };

  return (
    <div className="post-item">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => onDelete(post.id)}>Delete</button>
    </div>
  );
}

export default PostItem
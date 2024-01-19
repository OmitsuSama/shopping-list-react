import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteArticle, setQuantity, setName } from '../redux/article/ArticleActions';

export default function Article({ article }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);

  const handleDelete = () => {
    dispatch(deleteArticle(article.id));
  };

  const handleSetQuantity = (newQuantity) => {
    dispatch(setQuantity(newQuantity, article.id));
  };

  const handleSetName = (newName) => {
    dispatch(setName(newName, article.id));
  };

  let content = (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <p className="ms-5">
        {article.quantity} {article.name}
      </p>
    </div>
  );

  if (editMode) {
    content = (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="number"
          className="ms-2"
          onChange={(e) => {
            handleSetQuantity(e.target.value);
          }}
          value={article.quantity}
        />
        <input
          type="text"
          onChange={(e) => {
            handleSetName(e.target.value);
          }}
          value={article.name}
        />
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button className="btn btn-danger btn-sm" onClick={handleDelete}>
        Delete
      </button>
      <button className="btn btn-warning btn-sm" onClick={() => setEditMode(!editMode)}>
        Edit
      </button>
      {content}
    </div>
  );
}

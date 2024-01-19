import React from 'react';
import { useSelector } from 'react-redux';
import Article from './Article';

function ItemList() {
  const articles = useSelector((state) => state.articles);

  return (
    <div>
      <h4>Liste des articles</h4>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
}

export default ItemList;

import React from 'react';
import Form from './component/Form';
import ItemList from './component/ItemList';
import { useSelector, useDispatch } from 'react-redux';
import { addArticle, deleteArticle, setQuantity, setName } from './redux/article/ArticleActions';

function App(){

  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  const handleAddArticle = (article) => {
    dispatch(addArticle(article));
  };

  const handleDeleteArticle = (id_article) => {
    dispatch(deleteArticle(id_article));
  };

  const handleSetQuantity = (newQuantity, id_article) => {
    dispatch(setQuantity(newQuantity, id_article));
  };

  const handleSetName = (newName, id_article) => {
    dispatch(setName(newName, id_article));
  };

  return (
    <div className="container">
      <h3>Liste de courses</h3>
      <Form formTitle="Ajouter un article" addArticle={handleAddArticle} />
      <ItemList
        articles={articles}
        deleteArticle={handleDeleteArticle}
        setQuantity={handleSetQuantity}
        setName={handleSetName}
      />
    </div>
  );

}

export default App;

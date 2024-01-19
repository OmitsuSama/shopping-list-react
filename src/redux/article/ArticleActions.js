export const addArticle = (article) => ({
    type: 'ADD_ARTICLE',
    payload: article,
});
  
export const deleteArticle = (id_article) => ({
    type: 'DELETE_ARTICLE',
    payload: id_article,
});
  
export const setQuantity = (newQuantity, id_article) => ({
    type: 'SET_QUANTITY',
    payload: { newQuantity, id_article },
});
  
export const setName = (newName, id_article) => ({
    type: 'SET_NAME',
    payload: { newName, id_article },
});
  
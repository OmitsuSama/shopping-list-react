const initialState = {
    articles: [],
};
  
const ArticleReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ARTICLE':
        return {
          ...state,
          articles: [...state.articles, { ...action.payload, id: uuidv4() }],
        };
      case 'DELETE_ARTICLE':
        return {
          ...state,
          articles: state.articles.filter((article) => article.id !== action.payload),
        };
      case 'SET_QUANTITY':
        return {
          ...state,
          articles: state.articles.map((article) =>
            article.id === action.payload.id_article
              ? { ...article, quantity: action.payload.newQuantity }
              : article
          ),
        };
      case 'SET_NAME':
        return {
          ...state,
          articles: state.articles.map((article) =>
            article.id === action.payload.id_article
              ? { ...article, name: action.payload.newName }
              : article
          ),
        };
      default:
        return state;
    }
  };
  
export default ArticleReducer;
  
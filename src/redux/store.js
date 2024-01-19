import { createStore } from 'redux';
import ArticleReducer from './article/ArticleReducers'

const store = createStore(ArticleReducer);

export default store;
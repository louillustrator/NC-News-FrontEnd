import axios from "axios";
const URL = "https://lou-nc-news.herokuapp.com/api";

export const fetchArticles = () => {
  return axios.get(`${URL}/articles`).then(res => {
    return res.data.articlesCounted;
  });
};

export const fetchArticleByTopic = topic => {
  return axios.get(`${URL}/topics/${topic}/articles`).then(res => {
    return res.data.article;
  });
};

export const fetchArticleById = id => {
  return axios.get(`${URL}/articles/${id}`).then(res => {
    return res.data.article;
  });
};

export const updateVote = (articleId, direction) => {
  return axios
    .put(`${URL}/articles/${articleId}?vote=${direction}`)
    .then(res => {
      return res.data.article.votes;
    });
};

export const fetchCommentsById = articleId => {
  return axios.get(`${URL}/articles/${articleId}/comments`).then(res => {
    return res.data.comments;
  });
};

export const updateCommentVote = (id, direction) => {
  return axios.put(`${URL}/comments/${id}?vote=${direction}`).then(res => {
    return res.data.comment.votes;
  });
};

export const addComment = comment => {
  return axios
    .post(`${URL}/articles/${comment.belongs_to}/comments`, comment)
    .then(res => {
      return res.data.comment;
    });
};

export const deleteComment = commentId => {
  return axios.delete(`${URL}/comments/${commentId}`).then(res => {
    return res.data.msg;
  });
};

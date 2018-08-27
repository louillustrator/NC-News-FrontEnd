import axios from "axios";
const URL = "https://lou-nc-news.herokuapp.com/api";

export const errorCatcher = apiCallFn => {
  return (...args) =>
    apiCallFn(...args).catch(err => {
      console.log(err);
      let message;
      if (err.response.status === 400)
        message =
          "Im afraid that request is invalid, try checking the web address :)";
      if (err.response.status === 404)
        message = "There simply doesn't seem to be anything here for you";
      if (err.response.status === 500)
        message =
          "Whoops, looks like something bad has cropped up on the network";
      return { type: "error", message };
    });
};

export const fetchArticles = errorCatcher(() => {
  return axios.get(`${URL}/articles`).then(res => {
    return res.data.articlesCounted;
  });
});

export const fetchArticleByTopic = errorCatcher(topic => {
  return axios.get(`${URL}/topics/${topic}/articles`).then(res => {
    return res.data.article;
  });
});

export const fetchArticleById = errorCatcher(id => {
  return axios.get(`${URL}/articles/${id}`).then(res => {
    return res.data.article;
  });
});

export const updateVote = errorCatcher((articleId, direction) => {
  return axios
    .put(`${URL}/articles/${articleId}?vote=${direction}`)
    .then(res => {
      return res.data.article.votes;
    });
});

export const fetchCommentsById = errorCatcher(articleId => {
  return axios.get(`${URL}/articles/${articleId}/comments`).then(res => {
    return res.data.comments;
  });
});

export const updateCommentVote = errorCatcher((id, direction) => {
  return axios.put(`${URL}/comments/${id}?vote=${direction}`).then(res => {
    return res.data.comment.votes;
  });
});

export const addComment = errorCatcher(comment => {
  return axios
    .post(`${URL}/articles/${comment.belongs_to}/comments`, comment)
    .then(res => {
      return res.data.comment;
    });
});

export const deleteComment = errorCatcher(commentId => {
  return axios.delete(`${URL}/comments/${commentId}`).then(res => {
    return res.data.msg;
  });
});

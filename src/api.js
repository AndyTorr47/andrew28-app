import axios from "axios";

const articleApi = axios.create({
  baseURL: "https://andrew28-app.herokuapp.com/api",
});

export const getArticles = (sort_by, order, topic) => {
  return articleApi
    .get("/articles", {
      params: {
        sort_by,
        order,
        topic,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticleById = (article_id) => {
  return articleApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getTopics = () => {
  return articleApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const updateVotes = (article_id, vote) => {
  return articleApi
    .patch(`/articles/${article_id}`, { inc_votes: vote })
    .then(({ data }) => {
      return data.article;
    });
};

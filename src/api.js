import axios from "axios";

const articleApi = axios.create({
  baseURL: "https://andrew28-app.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return articleApi
    .get("/articles", {
      params: {
        topic: topic,
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

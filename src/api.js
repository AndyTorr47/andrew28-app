import axios from "axios";

const articleApi = axios.create({
  baseURL: "https://andrew28-app.herokuapp.com/api",
});

export const getArticles = () => {
  return articleApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

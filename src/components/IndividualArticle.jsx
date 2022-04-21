import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { Link } from "react-router-dom";

const IndividualArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, [article_id]);

  const { title, body, topic, author, votes, created_at, comment_count } =
    article;

  return (
    <div>
      <h2>{title}</h2>
      <h3>
        Written by: {author} on {created_at}
      </h3>
      <p>{body}</p>
      <p>
        Topic: <Link to={`/articles/:topic=${topic}`}>{topic}</Link>
        Votes: {votes} Comments: {comment_count}
      </p>
    </div>
  );
};

export default IndividualArticle;
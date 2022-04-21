import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics()
      .then((topicsFromApi) => {
        setTopics(topicsFromApi);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>Featured Topics</h2>
      <ul>
        {topics.map((topic) => {
          return (
            <li key={topic.slug}>
              <Link to={`/articles?topic=${topic.slug}`}>{topic.slug}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Topics;

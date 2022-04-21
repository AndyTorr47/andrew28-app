import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Home from "./components/Home";
import ArticleList from "./components/ArticleList";
import IndividualArticle from "./components/IndividualArticle";
import Topics from "./components/Topics";

function App() {
  return (
    <div className="App">
      <Home />
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<IndividualArticle />} />
        <Route path="/articles/:topic.slug" element={<ArticleList />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
    </div>
  );
}

export default App;

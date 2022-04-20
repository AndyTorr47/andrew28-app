import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Home from "./components/Home";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className="App">
      <Home />
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/articles" element={<ArticleList />}></Route>
      </Routes>
    </div>
  );
}

export default App;

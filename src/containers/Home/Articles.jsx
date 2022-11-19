import React from "react";

import ArticleCards from "../../components/cards/articles/ArticlesCard.jsx";

import home from "./home.module.css";

const Articles = () => {
  return (
    <div className={home.articlesContainer}>
      <h1>Our Latest Articles</h1>
      <p>Written by our experts</p>
      <div className={home.articles}>
      <ArticleCards main={true}/>
      <ArticleCards main={false}/>
      <ArticleCards main={false}/>
      </div>
    </div>
  );
};

export default Articles;

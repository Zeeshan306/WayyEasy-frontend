import { Grid } from "@material-ui/core";
import React from "react";

import ArticleCards from "../../components/cards/articles/ArticlesCard.jsx";

import home from "./home.module.css";

const Articles = () => {
  return (
    <div className={home.articlesContainer}>
      <h1>Our Latest Articles</h1>
      <p>Written by our experts</p>
      <Grid container spacing={2}>
      <ArticleCards main={true}/>
      <ArticleCards main={false}/>
      <ArticleCards main={false}/>
      </Grid>
    </div>
  );
};

export default Articles;

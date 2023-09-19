import React from "react";
import { Grid  } from "@material-ui/core";
import { Link } from 'react-router-dom'; 
import { LiaAngleRightSolid } from "react-icons/lia";  

import ArticleCards from "../../components/cards/articles/ArticlesCard.jsx";

import home from "./home.module.css";


const Articles = () => {
  return (
    <div className={home.articlesContainer}> 
      <h1>Our Latest Articles</h1>
      <p>Written by our experts</p>
      <Grid container spacing={2} justifyContent="space-around">     
        <Grid item xs={12} md={4} lg={4}> 
          <ArticleCards
            main={true}
            title="Regular Exercise" 
            des="Regular exercise can take away more the 80% of diseases both mental and physical Regular exercise can take away more the 80% of diseases both mental and physical Regular exercise can take away more the 80% of diseases both mental and physical Regular exercise can take away more the 80% of diseases both mental and physical Regular exercise can take away more the 80% of diseases both mental and physical Regular exercise can take away more the 80% of diseases both mental and physical Regular exercise can take away more the 80% of diseases both mental and physical Regular exercise can take away more the 80% of diseases both mental and physical Regular exercise can take away more the 80% of diseases both mental and physical Regular exercise can take away more the 80% of diseases both mental and physical Regular exercise can take away more the 80% of diseases both mental and physical Regular exercise can take away more the 80% of diseases both mental and physical Regular exercise can take away more the 80% of diseases both mental and physical Regular exercise can take away more the 80% of diseases both mental and physical Regular exercise can take away more the 80% of diseases both mental and physical Regular exercise can take away more the 80% of diseases both mental and physical Regular exercise can take away more the 80% of diseases both mental and physical Regular exercise can take away more the 80% of diseases both mental and physical"
          />
        </Grid>
        <Grid item xs={12} md={7} lg={6} >             
          <ArticleCards
            main={false}
            title="Regular Exercise"
            des="Regular exercise can take away more the 80% of diseases both mental and physical"
          />
          <ArticleCards
            main={false}
            title="Regular Exercise"
            des="Regular exercise can take away more the 80% of diseases both mental and physical"
          />
        </Grid> 
      </Grid>

      <Link to="/articles">       
        <button className={home.btn}> 
           View More <LiaAngleRightSolid className={home.icons} />  
        </button>
      </Link>  

    </div>
  );
};

export default Articles;

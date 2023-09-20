import React, { useEffect, useState } from "react";
import allarticles from "./allarticles.module.css";  
import { Link } from "react-router-dom";  
import { LiaAngleRightSolid } from "react-icons/lia"; 
import axios from "axios"; 


const AllArticles = () => {
  const [blogsList, setBlogsList] = useState();  
  useEffect(() => {
    axios.get("https://api.slingacademy.com/v1/sample-data/photos")   
      .then((response) => {
        setBlogsList(response?.data?.photos) 
      })
  }, [])

  return (
    <section className={allarticles.main_section}> 
      <div className={allarticles.main_section_container}> 
        {blogsList?.map((item, index) => (
          <div key={index} className={allarticles.main_section_card}> 
            <div className={allarticles.main_section_img}>
              <img src={item.url} alt="Placeholder" /> 
            </div>

            <div className={allarticles.main_section_card_content}> 
              <h3>{item.title}</h3>
              <p className={allarticles.main_section_headline}>{item.title}</p>  

              <p className={allarticles.desc}>{item.description}</p> 

              <Link to={`/articleDetails/${item.id}`} state={{ data: item }} >     
                <button className={allarticles.btn}> 
                   Continue Reading <LiaAngleRightSolid className={allarticles.icons} /> 
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>

  );
}


export default AllArticles;  
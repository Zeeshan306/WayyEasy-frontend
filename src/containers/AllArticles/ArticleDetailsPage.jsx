import React, { useEffect, useState } from "react";
import allarticles from  "./allarticles.module.css"; 
import { useLocation, useParams } from "react-router-dom"; 
import axios from "axios";

const ArticleDetailsPage = () => {
  const location = useLocation()
  const { id } = useParams()
  const [data, setData] = useState(null) 
  
  useEffect(() => {
    if (location.state?.data) {
      setData(location.state.data)
    } else {
      axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)  
      .then(response => {
        console.log(data)
        setData(response?.data?.photo) 
      })
      .catch(error => {
          alert(`Error: ${error}`) 
        })
      }
    }, [])
    
    console.log(data)
    
    return (
      <>
      {data ? <div>

        <section className={allarticles.detailspage} >   
          <div className={allarticles.container_flex}>
            <div className={allarticles.row}> 
              <div className={allarticles.container_headline}>  
                <h1>{data.title}</h1>
                <p className={allarticles.author_name}>{data.title}</p>  
              </div>
              <div className={allarticles.container_image}> 
                <p><img src={data.url} alt="blog-image" /> </p>  
                <p>{data.description}</p>  
              </div>
            </div>
          </div>
        </section>  

      </div> : ''}
    </>
  )
}

export default ArticleDetailsPage;  

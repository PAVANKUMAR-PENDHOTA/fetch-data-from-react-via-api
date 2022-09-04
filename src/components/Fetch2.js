import React,{useState} from 'react'
import axios from 'axios';

const Fetch2 = () => {
    const [news, setNews]= useState([]);

const fetchNews=()=>{
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=6004b8fcb1604003b4ead57854e8d2c2")
        .then((response) => {
          console.log(response);
          setNews(response.data.articles)
        })
}

  return (
    <>
    <div>
    <div>
    <button className='btn btn-primary' onClick={fetchNews}>News</button>
    </div>

    <div className="row">
          {
            news.map((value) => {
              return (
               
                  <div className="" style={{ width: "18rem" }}>
                    <img src={value.urlToImage} className="card-img-top" alt="..." />
                    <div className="">
                      <h5 className="title">{value.title}</h5>
                      <p className="text">{value.description}</p>
                      <a href="#" className="btn btn-primary">More..</a>
                    </div>
                  </div>
                
              );
            })  
          }
        </div>
        </div>
    </>
  )
}

export default Fetch2
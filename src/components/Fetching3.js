import React,{useState} from 'react'
import axios from 'axios';

const Fetch3 = () => {
    const [news]= useState([]);

const fetchNews=()=>{
    axios.get("http://3.82.96.188:8080/api/content/listAll")
        .then((response) => {
          //console.log(response);
          // console.log(response.statusCD);
          // setNews(response.data)
        })
}


// http://3.82.96.188:8080/api/content/listAll

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
                      <a href="Pavan" className="btn btn-primary">More..</a>
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

export default Fetch3
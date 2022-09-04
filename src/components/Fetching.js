import React,{useState} from 'react'
import axios from 'axios';
import { Button} from 'bootstrap';




const Fetching = () => {
    const [news, setNews] = useState([]);

    // const fetchNews = () => {
    //     axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=6004b8fcb1604003b4ead57854e8d2c2")
    //     .then((response) => {
    //     //   console.log(response);
    //       setNews(response.data.articles)
    //     })
    // }

    const fetchNews = () => {
      axios.get("http://3.82.96.188:8080/api/content/listAll")
      .then((response) => {
        console.log(response);
        setNews(response.data.contentLocations)
      })
  }

  
  return (
    
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <Button className='btn btn-primary' onClick={fetchNews}>FetchNews</Button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {
            news.map((pavan) => {
              return (
                // <div className="col-4">
                //   <div className="card" style={{ width: "18rem" }}>
                //     <img src={pavan.urlToImage} className="card-img-top" alt="..." />
                //     <div className="card-body">
                //       <h5 className="card-title">{pavan.title}</h5>
                //       <p className="card-text">{pavan.description}</p>
                //       <a href="#" className="btn btn-primary">More..</a>
                //     </div>
                //   </div>  
                // </div>

                <div className="col-4"> 


                    <div className="card" style={{ width: "18rem" }}>
                     <img src={pavan.actualContentLocation} className="card-img-top" alt="..." />
                     <div className="card-body">
                       <h5 className="card-title">{pavan.createdOn}</h5>
                       <p className="card-text">{pavan.modifiedOn}</p>
                       <a href="pavan" className="btn btn-primary">More..</a>
                     </div>
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

export default Fetching;
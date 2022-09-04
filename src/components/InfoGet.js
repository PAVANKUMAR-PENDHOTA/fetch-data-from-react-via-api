import React,{useState} from 'react'
import axios from 'axios';

const Fetch3 = () => {
    const [news, setNews]= useState([]);

const fetchNews=()=>{
    axios.get("http://3.82.96.188:8080/api/content/listAll"
    // {headers:{'Access-Control-Allow-Origin':'*'}}
    )
    
        .then((response) => {
            console.log(response.data);
            console.log("2nd One", response.data.responseData.contentLocations);
            console.log(response.data.responseData[0].contentLocations[0]);
            console.log(response.data.responseData[0].contentLocations[0].actualContentLocation);
          // console.log(response.statusCD);
          setNews(response.data.responseData);
        }).catch(error=>{
            console.log(error);
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
    <div>
    <table>
            <thead>
                <tr>
                    <th>ids</th>
                    <th>hashtags</th>
                    <th>link</th>
                    
                </tr>
            </thead>
 
            <tbody>
                {news.map(customer =>
                    <tr key={customer.contentId}>
                        <td>{customer.contentId}</td>
                        <td>{customer.hashtags}</td>
                        <td> <video src={customer.contentLocations[0].actualContentLocation}>
                    Play Video
                  </video></td>
                       
                        {/* <td> <button onClick={() => this.spliceRow(customer.contentLocations[0].actualContentLocation)}>
                    Play Video
                  </button></td> */}



                    </tr>
                )}
            </tbody>
        </table>
        </div>
        </div>
        </div>
    </>
  )
}

export default Fetch3
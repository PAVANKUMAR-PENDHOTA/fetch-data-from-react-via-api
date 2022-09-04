import React from 'react';
import axios from 'axios';
// import './App.css';

function App() {
  let [responseData, setResponseData] = React.useState('');

  const fetchData = React.useCallback(() => {
    axios({
      "method": "GET",
      "url": "http://3.82.96.188:8080/api/content/listAll",
      "headers": {
        "content-type": "application/octet-stream",
        "mode": "no-cors", 
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY
      }, "params": {
        "language_code": "en"
      }
    })
    .then((response) => {
      setResponseData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Fetching Data with React Hooks
        </h1>
        <button type='button' onClick={fetchData}>Click for Data</button>
      </header>
      <main>
        {responseData &&
          <blockquote>
            "{responseData && responseData.content}"
            <small>{responseData && responseData.originator && responseData.originator.name}</small>
          </blockquote>
        }
        </main>
      {/* <pre>
        <code>
          {responseData && JSON.stringify(responseData, null, 4)}
        </code>
      </pre> */}
    </div>
  );
}

export default App;














// import React from 'react';
// import axios from 'axios';

// const GetData = () => {
//     var config = {
//         method: 'get',
//         url: 'http://3.82.96.188:8080/api/content/listAll',
//         headers: { }
//       };
      
//       axios(config)
//       .then(response => {
//         console.log(JSON.stringify(response.data));
//       })
//       .catch(error => {
//         console.log(error.response  );
//       });
      
//   return (
//     <div>GetData</div>
//   )
// }

// export default GetData
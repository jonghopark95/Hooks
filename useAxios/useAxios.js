// Axios Fetch hooks

import defaultAxios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  if (!opts.url) {
    return;
  }
  const refetch = () => {
    setState({ ...state, loading: true });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({ ...state, loading: false, data });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, refetch };
};

export default useAxios;

// Use Example..
// import React, { useState, useEffect, useRef } from "react";
// import useAxios from "./useAxios";

// const App = () => {
//   const { loading, data, error, refetch } = useAxios({
//     url: " https://api.thecatapi.com/v1/images/search"
//   });
//   console.log(
//     `Loading : ${loading}\nData : ${JSON.stringify(data)}\nError : ${error}`
//   );
//   return (
//     <div className="App">
//       {/* <h1>{data}</h1> */}
//       <h1>{JSON.stringify(data)}</h1>
//       <h2>{loading && "Loading"}</h2>
//       <button onClick={refetch}>Refetch</button>
//     </div>
//   );
// };

// export default App;

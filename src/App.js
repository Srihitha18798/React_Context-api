import React,{createContext,useState} from "react";
import Count from "./Count";
import Display from "./Display";

export const store=createContext();

function App() {
  const [data,setData]=useState([
    {
      brandName:"Nokia"
    },
    {
      brandName:"Realme"
    },
    {
      brandName:"mi"
    }
  ]);
  return (
    <store.Provider value={[data,setData]}>
    <center>
      <Count/>
      <Display/>
    </center>
    </store.Provider>
  );
}

export default App;

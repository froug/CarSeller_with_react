import React,{useState,useEffect}from'react';
import {css} from '@emotion/react';
import PropagateLoader from "react-spinners/PropagateLoader";
import NavBar from './components/navbar/NavBar';
function App() {
  // const [loading,setloading] = useState(false);
  //   const override =css`
  //   dispaly:Block;
  //   border-color:red;
  //   margin-top:50%;`;

  //   useEffect(()=>{
  //     setloading(true);
  //     setTimeout(() => {
  //       setloading(false);
  //     }, 5000);
  //   },[]);
  return (
    <>  
      {/* {
        loading ? <PropagateLoader color={"#3d2514"} loading={loading} css={override} size={40}/>
      :
      <>
       <NavBar/>
       
      </>
      } */}

      <NavBar/>
     
    </>
  );
}

export default App;

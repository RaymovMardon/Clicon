import React from "react";
import img from "../../../public/images/404.svg";
import { useNavigate } from 'react-router-dom';
import styles from "./notf.module.scss";
function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = (i:number) => {
    if(i==1){
    navigate(-1);}
    else{
      navigate("/");
    }
  };
  
    return (
        <>
        <div className="custom_container"><div className={styles.not_f}>
      <div><img src={img} alt="not found" /></div>
      <h4>404, Page not founds</h4>
<p>Something went wrong. It’s look that your requested could not be found. It’s look like the link is broken or the page is removed.</p>
<div className="flex items-center gap-5.5">
  <button onClick={()=>handleGoBack(1)}>GO BACK</button>
  <button onClick={()=>handleGoBack(2)}>GO TO HOME</button>
</div>
</div>
</div>
      </>
    )
  }
  
  export default NotFound
import React, { useEffect } from "react";
import useProductStore from "../../Store/ProductStore";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const MyProducts = () =>{
  const { ListByRemark, ListByRemarkRequest } = useProductStore();

  useEffect(()=> {
    ListByRemarkRequest("Your-remark-string")
  },[])
  
  if (ListByRemark.length === 0) {
    return <MyProductsSkeleton />;
  } else {
    return (
      <div>
        <h1>My Products</h1>
      </div>
    
  );
};
}
export default MyProducts
 
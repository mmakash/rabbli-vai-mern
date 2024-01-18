import React from "react";
import useProductStore from "../../Store/ProductStore";
import MyProductsSkeleton from "./../../skeleton/MyProductsSkeleton";

const MyProducts = () => {
  const { ListByRemark } = useProductStore();

  if (ListByRemark.length === 0) {
    return <MyProductsSkeleton />;
  } else {
    return (
      <div>
        <h1>My Products</h1>
      </div>
    );
  }
};

export default MyProducts;

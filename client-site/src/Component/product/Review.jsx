import React from "react";
import useProductStore from "../../Store/ProductStore";

const Review = () => {
  const { ReviewList } = useProductStore();
  console.log(ReviewList);
  return (
    <div>
      <ul className="list-group mt-4 list-group-flush">
        {
          ReviewList && ReviewList.map((item,i)=>{
            return (
                <li key={i} className="list-group-item bg-transparent">
                    <h6>{item.review}</h6>
                </li>
              )
          })
        }
      </ul>
    </div>
  );
};

export default Review;

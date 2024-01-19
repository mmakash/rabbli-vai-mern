import React from "react";
import useProductStore from "../../Store/ProductStore";
import MyBrandsSkeleton from "../../skeleton/MyBrandsSkeleton";
import { Link } from "react-router-dom";

const MyBrands = () => {
  const { BrandList } = useProductStore();
  if (BrandList.length === 0) {
    return <MyBrandsSkeleton />;
  } else {
    return (
      <>
        <div className="section">
          <div className="container">
            <div className="row">
              <h1 className="headline-4 text-center my-2 p-0">Top Brands</h1>
              <span className="bodySmal mb-5 text-center">
                Explore a World of Choices Across Our Most Popular <br />
                Shopping Categories{" "}
              </span>
             {
               BrandList.map((brand)=>{
                return (
                    <div key={brand._id} className="col-6 col-lg-8r text-center col-md-8r p-2">
                <Link to={`/by-brands/${brand._id}`} className="card h-100 rounded-3 bg-white">
                  <div className="card-body">
                    <img className="w-75" src={brand.brandImg} />
                    <p className="bodySmal mt-3">{brand.brandName}</p>
                  </div>
                </Link>
              </div>
                )
               })
             }
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default MyBrands;

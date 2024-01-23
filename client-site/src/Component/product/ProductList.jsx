import React, { useState } from "react";
import useProductStore from "../../Store/ProductStore";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import MyProductsSkeleton from "../../skeleton/MyProductsSkeleton";
import { useEffect } from "react";

const ProductList = () => {
  const {
    ListProduct,
    BrandListRequest,
    BrandList,
    CategoryList,
    CategoryListRequest,
    ListByFilterRequest
  } = useProductStore();

  const [filter, setFilter] = useState({
    brandID: "",
    categoryID: "",
    priceMax: "",
    priceMin: "",
  });

  async function InputOnChange(name, value) {
    setFilter((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    (async () => {
      BrandList.length === 0 && (await BrandListRequest());
      CategoryList.length === 0 && (await CategoryListRequest());
      let isEveryPropertyEmpty = Object.values(filter).every((value) => value === "");
      !isEveryPropertyEmpty?(await ListByFilterRequest(filter)):""
    })();
  }, [filter]);

  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-3 p-2">
            <div className="card vh-100 p-3 shadow-sm">
              <label className="form-label mt-3">Brands</label>
              <select
              value={filter.brandID}
              onChange={async (e) =>
                await InputOnChange("brandID", e.target.value)
              }
               className="form-control form-select">
                <option value="">Choose Brand</option>
                {BrandList.length !== 0 &&
                  BrandList.map((brand) => {
                    return <option value={brand._id}>{brand.brandName}</option>;
                  })}
              </select>
              <label className="form-label mt-3">Categories</label>
              <select
                value={filter.categoryID}
                onChange={async (e) =>
                  await InputOnChange("categoryID", e.target.value)
                }
                className="form-control form-select"
              >
                <option value="">Choose Category</option>
                {CategoryList.length !== 0 &&
                  CategoryList.map((category) => {
                    return (
                      <option value={category._id}>
                        {category.categoryName}
                      </option>
                    );
                  })}
              </select>
              <label className="form-label mt-3">Maximum Price ${filter.priceMax}</label>
              <input
              value={filter.priceMax}
              onChange={async (e) =>
                await InputOnChange("priceMax", e.target.value)
              }
                min={0}
                max={1000000}
                step={1000}
                type="range"
                className="form-range"
              />
              <label className="form-label mt-3">Minimum Price ${filter.priceMin}</label>
              <input
              value={filter.priceMin}
              onChange={async (e) =>
                await InputOnChange("priceMin", e.target.value)
              }
                min={0}
                max={1000000}
                step={1000}
                type="range"
                className="form-range"
              />
            </div>
          </div>
          <div className="col-md-9 p-2">
            <div className="container">
              <div className="row">
                {ListProduct.length === 0 ? (
                  <MyProductsSkeleton />
                ) : (
                  <div className="container">
                    <div className="row">
                      {ListProduct.map((item) => {
                        let price = (
                          <p className="bodyMedium  text-dark my-1">Price </p>
                        );
                        if (item.discount === true) {
                          price = (
                            <p className="bodyMedium  text-dark my-1">
                              Price:<strike>${item.price}</strike>$
                              {item.discountPrice}
                            </p>
                          );
                        }
                        return (
                          <div
                            key={item._id}
                            className="col-md-3 p-2 col-lg-3 col-sm-6 col-12"
                          >
                            <Link
                              to={`/details/${item._id}`}
                              className="card shadow-sm h-100 rounded-3 bg-white"
                            >
                              <img
                                className="w-100 rounded-top-2"
                                src={item.image}
                              />
                              <div className="card-body">
                                <p className="bodySmal text-secondary my-1">
                                  {item.title}
                                </p>
                                <p className="bodyMedium  text-dark my-1">
                                  {price}
                                </p>
                                <StarRatings
                                  rating={4}
                                  starRatedColor="red"
                                  starDimension="15px"
                                  starSpacing="2px"
                                />
                              </div>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;

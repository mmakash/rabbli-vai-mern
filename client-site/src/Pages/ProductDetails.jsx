import React, { useEffect } from "react";
import Layout from "../Component/layout/Layout";
import Details from "../Component/product/Details";
import MyBrands from "../Component/product/MyBrands";
import { useParams } from "react-router-dom";
import useProductStore from "../Store/ProductStore";

const ProductDetails = () => {
  const {
    ProductDetailRequest,
    ProductReviewListRequest,
    BrandList,
    BrandListRequest,
  } = useProductStore();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await ProductDetailRequest(id);
      await ProductReviewListRequest(id);
      BrandList && (await BrandListRequest());
    })();
  }, []);
  return (
    <>
      <Layout>
        <Details />
        <MyBrands />
      </Layout>
    </>
  );
};

export default ProductDetails;

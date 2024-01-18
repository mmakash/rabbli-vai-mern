import React, { useEffect } from 'react';
import Layout from '../Component/layout/Layout';
import MyBrands from '../Component/product/MyBrands';
import useProductStore from '../Store/ProductStore';
import { useFeatureStore } from '../Store/FeatureStore';
import MySlider from '../Component/product/MySlider';
import MyFeatures from '../Component/product/MyFeatures';
import MyCategories from '../Component/product/MyCategories';
import MyProducts from '../Component/product/MyProducts';


const Home = () => {

    const {BrandListRequest,CategoryListRequest, SliderListRequest,ListByRemarkRequest} = useProductStore();
    const {FeatureListRequest} = useFeatureStore();

    useEffect(() => {
        (async()=>{
            await SliderListRequest();
            await FeatureListRequest();
            await CategoryListRequest();
            await ListByRemarkRequest("New");
            await BrandListRequest();
        })()
    },[])

    return (
        <>
            <Layout>
                <MySlider />
                <MyFeatures />
                <MyCategories />
                <MyProducts />
                <MyBrands />
            </Layout>
        </>
    );
};

export default Home;
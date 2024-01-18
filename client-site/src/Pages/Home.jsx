import React, { useEffect } from 'react';
import Layout from '../Component/layout/Layout';
import useProductStore from '../Store/ProductStore';
import { useFeatureStore } from '../Store/FeatureStore';
import MyBrands from '../Component/product/MyBrands';
import Features from '../Component/product/Features';

const Home = () => {
    const { FeatureList, FeatureListRequest } = useFeatureStore()
    const {BrandListRequest,BrandList, CategoryListRequest, CategoryList } = useProductStore()
    
    console.log("Feature list ==",FeatureList)
    console.log("Brand list ==",BrandList)
    console.log("Category list ==",CategoryList)


    useEffect(() => {
        FeatureListRequest()
        BrandListRequest(), 
        CategoryListRequest()
    }, [])

    return (
        <Layout>
            <Features data={FeatureList} />
        </Layout>
    );
};

export default Home;
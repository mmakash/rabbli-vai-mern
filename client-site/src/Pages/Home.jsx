import React, { useEffect } from 'react';
import Layout from '../Component/layout/Layout';
import ProductStore from '../Store/ProductStore';
import { useFeatureStore } from '../Store/FeatureStore';
import MyBrands from '../Component/product/MyBrands';
import Features from '../Component/product/Features';

const Home = () => {
    const { FeatureList, FeatureListRequest } = useFeatureStore()
    console.log(FeatureList)

    useEffect(() => {
        FeatureListRequest()
    }, [])

    return (
        <Layout>
            <Features data={FeatureList} />
        </Layout>
    );
};

export default Home;
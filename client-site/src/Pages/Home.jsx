import React, { useEffect } from 'react';
import Layout from '../Component/layout/Layout';
import ProductStore from '../Store/ProductStore';
import FeatureStore from '../Store/FeatureStore';
import MyBrands from '../Component/product/MyBrands';

const Home = () => {
    const {SliderListRequest} = ProductStore();
    const {FeatureListRequest} = FeatureStore();

    useEffect(() => {
        (async () => {
            await SliderListRequest();
            await FeatureListRequest();
        })()
    },[])
    return (
       <Layout>
        <MyBrands/>
     </Layout>
    );
};

export default Home;
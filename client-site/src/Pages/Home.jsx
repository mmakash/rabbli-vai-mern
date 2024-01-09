import React from 'react';
import Layout from '../Component/layout/Layout';
import MySliderSkeleton from '../skeleton/MySliderSkeleton';
import MyFeaturesSkeleton from '../skeleton/MyFeaturesSkeleton';
import MyCategoriesSkeleton from '../skeleton/MyCategoriesSkeleton';
import MyProductsSkeleton from '../skeleton/MyProductsSkeleton';
import MyBrandsSkeleton from '../skeleton/MyBrandsSkeleton';





const Home = () => {
    return (
       <Layout>

        <MySliderSkeleton />
        <MyFeaturesSkeleton />
        <MyCategoriesSkeleton />
        <MyProductsSkeleton />
        <MyBrandsSkeleton />

       </Layout>
    );
};

export default Home;
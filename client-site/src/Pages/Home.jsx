import React, { useEffect } from 'react';
import Layout from '../Component/layout/Layout';
import ProductStore from '../Store/ProductStore';
import MyBrands from '../Component/product/MyBrands';
import axios from 'axios';




const Home = () => {

    const {SliderListRequest} = ProductStore();

    // const {FeatureListRequest} = FeatureStore();




    useEffect(() => {
        const getFeatureList = async() => {
            try{
                const result = await axios.get("http://localhost:5000/api/v1/FeatureList");
                console.log(result)
            }catch(e){
                console.log(e)
            }
        }
        getFeatureList()
    })


    return (
       <Layout>

        <MyBrands/>

       </Layout>
    );
};

export default Home;
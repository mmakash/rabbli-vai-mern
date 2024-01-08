import React, { useEffect } from 'react';
import ProductStore from '../Store/ProductStore';

const Home = () => {

    const {BrandList,BrandListRequest} = ProductStore();

    useEffect(()=>{
        (async()=>{
            await BrandListRequest();
        })()
    })

    return (
        <div>
            <h1>Hello World From Home page</h1>
            <p>{JSON.stringify(BrandList)}</p>
        </div>
    );
};

export default Home;
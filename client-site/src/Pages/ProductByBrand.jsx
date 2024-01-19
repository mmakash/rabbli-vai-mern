import React, { useEffect } from 'react';
import useProductStore from '../Store/ProductStore';
import {useParams} from 'react-router-dom';
import Layout from './../Component/layout/Layout';
import ProductList from '../Component/product/ProductList';

const ProductByBrand = () => {
    const {ListByBrandRequest} = useProductStore();
    const {id} = useParams();

    useEffect(() => {
        (async()=>{
            await ListByBrandRequest(id);
        })()
    },[])

    return (
       <Layout>
           <ProductList/>
       </Layout>
    );
};

export default ProductByBrand;
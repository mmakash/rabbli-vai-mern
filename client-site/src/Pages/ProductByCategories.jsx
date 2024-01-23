import React, { useEffect } from 'react';
import useProductStore from '../Store/ProductStore';
import {useParams} from 'react-router-dom';
import Layout from './../Component/layout/Layout';
import ProductList from '../Component/product/ProductList';

const ProductByCategories = () => {
    const {ListByCategoryRequest} = useProductStore();
    const {id} = useParams();

    useEffect(() => {
        (async()=>{
            await ListByCategoryRequest(id);
        })()
    },[id])

    return (
       <Layout>
           <ProductList/>
       </Layout>
    );
};

export default ProductByCategories;
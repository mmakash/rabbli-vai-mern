import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Layout from './../Component/layout/Layout';
import ProductList from '../Component/product/ProductList';
import useProductStore from '../Store/ProductStore';

const ProductByKeyWord = () => {
    const {ListByKeywordRequest} = useProductStore();
    const {keyWord} = useParams();

    useEffect(() => {
        (async()=>{
            await ListByKeywordRequest(keyWord);
        })()
    },[keyWord])

    return (
       <Layout>
           <ProductList/>
       </Layout>
    );
};

export default ProductByKeyWord;
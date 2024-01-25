import React, { useEffect } from 'react';
import Layout from './../Component/layout/Layout';
import LegalContents from '../Component/features/LegalContents';
import { useFeatureStore } from '../Store/FeatureStore';

const HowToBuy = () => {
    const {LegalDetailsRequest} = useFeatureStore();
    useEffect(() => {
        (async()=>{
            await LegalDetailsRequest("how-to-buy");
        })()
    }, [])

    return (
        <Layout>
            <LegalContents />
        </Layout>
    );
};

export default HowToBuy;
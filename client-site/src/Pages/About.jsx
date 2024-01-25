import React, { useEffect } from 'react';
import Layout from './../Component/layout/Layout';
import LegalContents from '../Component/features/LegalContents';
import { useFeatureStore } from '../Store/FeatureStore';

const About = () => {
    const {LegalDetailsRequest} = useFeatureStore();
    useEffect(() => {
        (async()=>{
            await LegalDetailsRequest("about");
        })()
    }, [])

    return (
        <Layout>
            <LegalContents />
        </Layout>
    );
};

export default About;
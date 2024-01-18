import React from 'react';
import useProductStore from '../../Store/ProductStore';
import MySliderSkeleton from './../../skeleton/MySliderSkeleton';

const MySlider = () => {
    const {SliderList} = useProductStore();
    if(SliderList.length === 0){
        return <MySliderSkeleton />
    }else{
        return <div>Slider</div>
    }
 
};

export default MySlider;
import React from 'react';
import SliderComponent from '../../../components/SliderComponent/SliderComponent';
import bgimge1 from "../../../assets/SecondSliderImges/img1.jpg";
import bgimge2 from "../../../assets/SecondSliderImges/img2.jpg";
import bgimge3 from "../../../assets/SecondSliderImges/img3.jpg";
const RightSlider = () => {
    return (
        <>
             <SliderComponent 
      bgimge1={bgimge1}
      bgimge2={bgimge2}
      bgimge3={bgimge3}
      
      ></SliderComponent>
        </>
    );
};

export default RightSlider;
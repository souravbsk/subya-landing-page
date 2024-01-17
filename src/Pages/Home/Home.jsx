import React from 'react';
import SliderHeroSection from './SliderHeroSection/SliderHeroSection';
import PieChartSection from './PieChartSection/PieChartSection';
import MissionVissionSection from './MissionVissionSection/MissionVissionSection';
import NoticeSlider from './NoticeSlider/NoticeSlider';
import SolutionSection from './SolutionSection/SolutionSection';
import StoreSection from './StoreSection/StoreSection';
import BlogSection from './BlogSection/BlogSection';

const Home = () => {
    return (
       <div>
        <SliderHeroSection></SliderHeroSection>
        <PieChartSection></PieChartSection>
        <MissionVissionSection></MissionVissionSection>
        <NoticeSlider></NoticeSlider>
        <SolutionSection></SolutionSection>
        <StoreSection></StoreSection>
        <BlogSection></BlogSection>
       </div>
    );
};

export default Home;
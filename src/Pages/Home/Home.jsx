import React from 'react';
import SliderHeroSection from './SliderHeroSection/SliderHeroSection';
import PieChartSection from './PieChartSection/PieChartSection';
import MissionVissionSection from './MissionVissionSection/MissionVissionSection';
import NoticeSlider from './NoticeSlider/NoticeSlider';
import SolutionSection from './SolutionSection/SolutionSection';
import StoreSection from './StoreSection/StoreSection';
import BlogSection from './BlogSection/BlogSection';
import TabListSection from './TabListSection/TabListSection';
import TimeLine from './TimeLine/TimeLine';
import ScrollableTab from '../../components/ScrollableTab/ScrollableTab';

const Home = () => {
    return (
       <div className='mt-20'>
        <SliderHeroSection></SliderHeroSection>
        <PieChartSection></PieChartSection>
        <TimeLine></TimeLine>
        <MissionVissionSection></MissionVissionSection>
        <NoticeSlider></NoticeSlider>
        <SolutionSection></SolutionSection>
        {/* <ScrollableTab></ScrollableTab> */}
        <StoreSection></StoreSection>
        <BlogSection></BlogSection>
        <TabListSection></TabListSection>

       </div>
    );
};

export default Home;
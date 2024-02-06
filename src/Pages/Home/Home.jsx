import React from "react";
import SliderHeroSection from "./SliderHeroSection/SliderHeroSection";
import SecondSection from "./SecondSection/SecondSection";
import MissionVissionSection from "./MissionVissionSection/MissionVissionSection";
import NoticeSlider from "./NoticeSlider/NoticeSlider";
import SolutionSection from "./SolutionSection/SolutionSection";
import StoreSection from "./StoreSection/StoreSection";
import BlogSection from "./BlogSection/BlogSection";
import TabListSection from "./TabListSection/TabListSection";
import TimeLine from "./TimeLine/TimeLine";
import { ScrollRestoration } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <SliderHeroSection></SliderHeroSection>
      <SecondSection></SecondSection>
      <TimeLine></TimeLine>
      <MissionVissionSection></MissionVissionSection>
      <NoticeSlider></NoticeSlider>
      <SolutionSection></SolutionSection>
      <StoreSection></StoreSection>
      <BlogSection></BlogSection>
      <TabListSection></TabListSection>
      <ScrollRestoration />
    </div>
  );
};

export default Home;

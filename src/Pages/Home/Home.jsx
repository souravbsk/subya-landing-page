import React from 'react';
import SliderContactSection from './SliderContactSection/SliderContactSection';
import SecondSliderSection from './SecondSliderSection/SecondSliderSection';
import ContactSection from './ContactSection/ContactSection';
import NoticeSlider from './NoticeSlider/NoticeSlider';

const Home = () => {
    return (
       <div>
        <SliderContactSection></SliderContactSection>
        <SecondSliderSection></SecondSliderSection>
        <ContactSection></ContactSection>
        {/* <NoticeSlider></NoticeSlider> */}
       </div>
    );
};

export default Home;
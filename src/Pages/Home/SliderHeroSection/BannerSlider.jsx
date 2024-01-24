import SliderComponent from "../../../components/SliderComponent/SliderComponent";
import bgimge1 from "../../../assets/first-slider/slider-1.webp";
import bgimge2 from "../../../assets//first-slider/slider-2.webp";
import bgimge3 from "../../../assets//first-slider/slider-3.webp";
import bgimge4 from "../../../assets//first-slider/slider-4.webp";
const BannerSlider = () => {
  return (
    <>
      <SliderComponent 
      bgimge1={bgimge1}
      bgimge2={bgimge2}
      bgimge3={bgimge3}
      bgimge4={bgimge4}
      
      ></SliderComponent>
    </>
  );
};

export default BannerSlider;
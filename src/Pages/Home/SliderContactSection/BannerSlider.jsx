import SliderComponent from "../../../components/SliderComponent/SliderComponent";
import bgimge1 from "../../../assets/bannerslider/img1.jpg";
import bgimge2 from "../../../assets/bannerslider/img2.jpg";
import bgimge3 from "../../../assets/bannerslider/img3.jpg";
const BannerSlider = () => {
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

export default BannerSlider;
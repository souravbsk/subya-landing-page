import React from "react";
import "./HorizontalTimeLine.css";
import HorizontalContextTop from "../HorizontalContextTop/HorizontalContextTop";
import HorizontalContextBottom from "../HorizontalContextBottom/HorizontalContextBottom";
const HorizontalTimeLine = () => {
  return (
    <section class="main-timeline-section ">
      <div class="timeline-start"></div>
      <div class="conference-center-line"></div>
      <div class="conference-timeline-content">
        <HorizontalContextTop
          date="7 March"
          pera={
            <>
              <span className="text-[#7A5542] font-bold">Incorporated </span> Sabhyasha Retail Tech Pvt. Ltd.
             
            </>
          }
        ></HorizontalContextTop>
        <HorizontalContextBottom
        date="15 APRIL"
        pera={
          <>
           Collaborated With Our {" "}
            <span className="text-[#7A5542] font-bold">First Artisan</span> - a
            pattachitra Artist
          </>
        }
        ></HorizontalContextBottom>
        <HorizontalContextTop
          date="7 March"
          pera={
            <>
              <span className="text-[#7A5542] font-bold">Incorporated </span> Sabhyasha Retail Tech Pvt. Ltd.
             
            </>
          }
        ></HorizontalContextTop>
         <HorizontalContextBottom
        date="15 APRIL"
        pera={
          <>
           Collaborated With Our {" "}
            <span className="text-[#7A5542] font-bold">First Artisan</span> - a
            pattachitra Artist
          </>
        }
        ></HorizontalContextBottom>
        <HorizontalContextTop
          date="7 March"
          pera={
            <>
              <span className="text-[#7A5542] font-bold">Incorporated </span> Sabhyasha Retail Tech Pvt. Ltd.
             
            </>
          }
        ></HorizontalContextTop>
         <HorizontalContextBottom
        date="15 APRIL"
        pera={
          <>
           Collaborated With Our {" "}
            <span className="text-[#7A5542] font-bold">First Artisan</span> - a
            pattachitra Artist
          </>
        }
        ></HorizontalContextBottom>
        <HorizontalContextTop
          date="7 March"
          pera={
            <>
              <span className="text-[#7A5542] font-bold">Incorporated </span> Sabhyasha Retail Tech Pvt. Ltd.
             
            </>
          }
        ></HorizontalContextTop>
         <HorizontalContextBottom
        date="15 APRIL"
        pera={
          <>
           Collaborated With Our {" "}
            <span className="text-[#7A5542] font-bold">First Artisan</span> - a
            pattachitra Artist
          </>
        }
        ></HorizontalContextBottom>
        <HorizontalContextTop
          date="7 March"
          pera={
            <>
              <span className="text-[#7A5542] font-bold">Incorporated </span> Sabhyasha Retail Tech Pvt. Ltd.
             
            </>
          }
        ></HorizontalContextTop>
      </div>
      <div class="timeline-end"></div>
    </section>
  );
};

export default HorizontalTimeLine;

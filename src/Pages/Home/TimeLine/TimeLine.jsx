import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./TimeLine.css";
import { GiFlowerEmblem } from "react-icons/gi";
import Button from "../../../components/Button/Button";
const TimeLine = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("/event.json")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  return (
    <section
      id="journey"
      className="flex flex-col md:flex-row py-20 items-center peraBg
     justify-center gap-4"
    >
      <div className="flex-1 md:px-12">
        <div data-aos="fade-right" className="text-center">
          <h4 className=" text-2xl mb-3 font-bold text-[#5D2F18] text-timeline">
            Journey of
          </h4>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-3 text-[#7A5542] ">
            SABHYASHA
          </h2>
          <p className="font-heebo text-center font-medium text-[#7A5542] md:text-xl">
            Ever since its inception, Sabhyasha Retail Tech has been making
            progress in all domains
          </p>
          <div className="mt-5">
            <Button link="/our-journey" text="Read More"></Button>
          </div>
        </div>
      </div>
      <div className="flex-1 h-96 md:h-[500px] overflow-x-hidden overflow-y-auto">
        <VerticalTimeline>
          {events.map((event) => (
            <VerticalTimelineElement
              key={event.id}
              className="vertical-timeline-element--work "
              contentStyle={{}}
              contentArrowStyle={{}}
              dateClassName="text-[#7A5542] font-bold"
              date={event?.date}
              iconStyle={{ backgroundColor: "#7A5542", color: "white" }}
              icon={<GiFlowerEmblem />}
            >
              <p dangerouslySetInnerHTML={{ __html: event.content }}></p>
            </VerticalTimelineElement>
          ))}

          <VerticalTimelineElement
            iconStyle={{ backgroundColor: "#7A5542", color: "white" }}
            icon={<GiFlowerEmblem />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default TimeLine;

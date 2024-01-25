import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./TimeLine.css";
import { GiFlowerEmblem } from "react-icons/gi";
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
    <div
      className="flex py-20 items-center peraBg
     justify-center gap-12"
    >
      <div className="flex-1 px-12">
        <div className="text-center">
          <h4 className="text-2xl mb-3 font-bold text-[#5D2F18] text-timeline">TimeLine</h4>
          <h2 className="text-6xl font-extrabold mb-3 text-[#7A5542] ">SABHYASHA</h2>
          <p className="font-heebo text-center font-medium text-[#7A5542] text-xl">
            Ever since its inception, Sabhyasha Retail Tech has been making
            progress in all domains
          </p>
        </div>
      </div>
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
  );
};

export default TimeLine;

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
    <VerticalTimeline>
      {events.map((event) => (
        <VerticalTimelineElement 
        key={event.id}
          className="vertical-timeline-element--work "
          contentStyle={{}}
          contentArrowStyle={{}}
          dateClassName="text-[#7A5542] font-semibold"
          date={event?.date}
          iconStyle={{ backgroundColor: "#7A5542", color: "white" }}
          icon={<GiFlowerEmblem />}
        >
          <p>
            {event.content}
          </p>
        </VerticalTimelineElement>
      ))}

      <VerticalTimelineElement
        iconStyle={{ backgroundColor: "#7A5542", color: "white" }}
        icon={<GiFlowerEmblem />}
      />
    </VerticalTimeline>
  );
};

export default TimeLine;

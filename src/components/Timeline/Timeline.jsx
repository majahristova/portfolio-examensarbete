import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import data from "../../utils/experienceData.json";

const Timeline = () => {
  return (
    <VerticalTimeline>
      {data.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(75, 0, 130, 1)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgba(75, 0, 130, 1)" }}
          date={`${item.startDate} - ${item.endDate}`}
          iconStyle={{ background: "rgba(75, 0, 130, 1)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">{item.position}</h3>
          <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
          <p>{item.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;

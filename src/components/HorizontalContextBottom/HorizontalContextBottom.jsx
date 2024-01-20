import React from "react";

const HorizontalContextBottom = ({date,pera}) => {
  return (
    <div class="timeline-article timeline-article-bottom">
      <div class="content-date">
        <span>{date}</span>
      </div>
      <div class="meta-date"></div>
      <div class="content-box">
        <p>
         {pera}
        </p>
      </div>
    </div>
  );
};

export default HorizontalContextBottom;

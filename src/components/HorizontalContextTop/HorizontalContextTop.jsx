import React from "react";

const HorizontalContextTop = ({date,pera}) => {
  return (
    <div class="timeline-article timeline-article-top">
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

export default HorizontalContextTop;

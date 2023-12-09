import React from "react";

const CardComp = ({ image, title, content }) => {
  return (
    <div className="w-full h-full bg-[#2f3e46] rounded-md p-5">
      <div id="cover" className="w-full h-1/2">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <h3 id="title" className="text-center mt-3">
        {title}
      </h3>
      <div id="content" className="text-center">
        {content}
      </div>
    </div>
  );
};

export default CardComp;

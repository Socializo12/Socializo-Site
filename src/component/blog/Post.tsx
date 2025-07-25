import React from "react";
import "tailwindcss";
import "@/component/style.css";
const Post = () => {
  return (
    <section className="main-container ">
      {/* Enhanced Background Effects */}
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="morphing-shapes">
        <div className="morph"></div>
        <div className="morph"></div>
      </div>

      <div className="sparkle-container">
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
      </div>

      {/* main Container */}
      <div className="main-box content-box w-full mx-auto max-w-[800px] p-[40ox] mb-[30px]">
        <div className="">
          <h2 className="text-[22px] md:text-[36px] text-red-300">Meta Ads in Houston: How to Actually Get Sales (Without Losing Your Mind)</h2>
        </div>
      </div>
    </section>
  );
};

export default Post;

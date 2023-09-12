import React from "react";
import '../style/SupportUs.css';

// Common parts of the image URL and API key
const baseUrl = "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F";
const apiKey = "apiKey=50a3ddcc8e3947588b799d691b0cfa8b";

// Image widths for srcSet
const widths = [100, 200, 400, 800, 1200, 1600, 2000];

// Generate srcSet string
const generateSrcSet = (imageId) => {
  return widths
    .map(
      (width) =>
        `${baseUrl}${imageId}?${apiKey}&&width=${width} ${width}w`
    )
    .join(", ");
};
function SupportUs() {
  return (
    <>
      <div className="support-us">
        <div className="support-us-image">
          <img
            loading="lazy"
            srcSet={generateSrcSet("7cea74f98e83447ea258f5126ce657f2")}
            alt="Support Us"
          />
        </div>
        <div className="support-us-text">
          crowd-sourced engine for climate growth and urban cooling
        </div>
        <div className="support-us-button">
          Support Us
        </div>
      </div>
    </>
  );
}

export default SupportUs;

import React from "react";


// Example logo URLs (replace with your own)
const logos = [
  "https://cdn.simpleicons.org/html5",   //https://cdn.simpleicons.org/html5:we can remove 00ffd5 as it only show color that we want otherwise remove to have its original color
  "https://cdn.simpleicons.org/css",
  "https://cdn.simpleicons.org/javascript",
  "https://cdn.simpleicons.org/react",
  "https://cdn.simpleicons.org/nodedotjs",
  "https://cdn.simpleicons.org/supabase",
    "https://cdn.simpleicons.org/firebase",
  "https://cdn.simpleicons.org/mysql",
  "https://cdn.simpleicons.org/mongodb",
   "https://cdn.simpleicons.org/git",
    "https://cdn.simpleicons.org/postman",
];

export default function LogoSlider() {
  return (
    <div className="slider">
      <div className="slide-track">
        {/* Duplicate logos for seamless looping */}
        {logos.concat(logos).map((logo, index) => (
          <div className="slide" key={index}>
            <img src={logo} alt={`Logo ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}


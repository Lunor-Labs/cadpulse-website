import React, { useEffect, useState } from "react";

function ContactHereButton() {
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    if (expanded) {
      const timer = setTimeout(() => setExpanded(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [expanded]);

  return (
    <a
      href="https://wa.me/94788638718" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a free consultation on WhatsApp"
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onTouchStart={() => setExpanded((prev) => !prev)}
      style={{ textDecoration: "none" }}
    >
      <div
        className={`
          flex items-center justify-between bg-[#06006e] hover:bg-[#23237a] text-white font-bold rounded-full shadow-2xl transition-all duration-500
          h-14 pl-6 ${expanded ? "pr-10" : "pr-6"} cursor-pointer
          ${expanded ? "w-[390px] ring-4 ring-[#23237a]/30" : "w-44"}
        `}
        style={{
          minWidth: "auto",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <span className="text-lg">Contact Here</span>
        <span
          className={`
            transition-all duration-500
            ${expanded ? "opacity-100 scale-100 ml-4" : "opacity-0 scale-75 ml-0"}
          `}
          style={{
            willChange: "opacity, transform",
            display: "inline-block",
          }}
        >
          <span className="bg-white text-[#06006e] rounded-full px-4 py-2 text-base font-semibold shadow mr-2">
            Book a free consultation
          </span>
        </span>
      </div>
    </a>
  );
}

export default ContactHereButton;
import React, { useEffect, useState, useRef } from "react";

function FloatingConsultationButton() {
  const [showPopup, setShowPopup] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!showPopup) {
        setShowPopup(true);
      }
      
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      
      scrollTimeout.current = setTimeout(() => {
        setShowPopup(false);
      }, 1500);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [showPopup]);

  return (
    <a
      href="https://wa.me/+94788638718"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a free consultation on WhatsApp"
      className="fixed bottom-6 right-6 z-50"
      style={{ textDecoration: "none" }}
    >
      <div
        className={`
          flex items-center bg-[#06006e] hover:bg-[#23237a] text-white rounded-full transition-all duration-300
          h-14
          ${showPopup ? "w-[320px] px-6 justify-start" : "w-14 px-0 justify-center"}
        `}
        style={{
          minWidth: "3.5rem",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <div className="flex items-center justify-center w-10 h-10 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#FFFFFF"
          >
            <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12a11.94 11.94 0 0 0 1.64 6.06L0 24l6.18-1.62A12.07 12.07 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22a9.93 9.93 0 0 1-5.13-1.42l-.37-.22-3.67.96.98-3.58-.24-.37A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 5.02 4.22.7.24 1.25.38 1.68.49.71.18 1.36.15 1.87.09.57-.07 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z"/>
          </svg>
        </div>
        
        {showPopup && (
          <span className="ml-4 transition-opacity duration-300 font-semibold opacity-100">
            <span className="bg-white text-[#06006e] rounded-full px-4 py-2 text-base shadow">
              Book a free consultation
            </span>
          </span>
        )}
      </div>
    </a>
  );
}

export default FloatingConsultationButton;

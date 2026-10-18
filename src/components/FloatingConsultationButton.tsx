import React, { useCallback, useEffect, useState, useRef } from "react";
import { Mail } from "lucide-react";
import ConsultationForm from "./ConsultationForm";

function FloatingConsultationButton() {
  const [showPopup, setShowPopup] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeForm = useCallback(() => setIsFormOpen(false), []);

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
    <>
      <button
        type="button"
        onClick={() => setIsFormOpen(true)}
        aria-label="Book a free consultation by email"
        className="fixed bottom-6 right-6 z-50"
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
            <Mail className="w-6 h-6 text-white" />
          </div>

          {showPopup && (
            <span className="ml-4 transition-opacity duration-300 font-semibold opacity-100">
              <span className="bg-white text-[#06006e] rounded-full px-4 py-2 text-base shadow">
                Book a free consultation
              </span>
            </span>
          )}
        </div>
      </button>

      <ConsultationForm isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
}

export default FloatingConsultationButton;

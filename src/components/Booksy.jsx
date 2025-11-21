import { useEffect } from "react";

export default function Booksy() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://booksy.com/widget/code.js";
    script.async = true;

    script.onload = () => {
      setTimeout(() => {
        if (window.BooksyWidget) {
          window.BooksyWidget({
            targetElementId: "booksy-widget-container",
            businessId: "YOUR_BOOKSY_BUSINESS_ID",
            showFloatingButton: true,
            language: "en",
            theme: "brand-blue",
          });
        } else {
          console.error("BooksyWidget did not load");
        }
      }, 300);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="booksy-widget-container"></div>;
}

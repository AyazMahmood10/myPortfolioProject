import React from "react";
import "./footer.style.css";

const FooterPanel = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">
        AYAZ MAHMOOD &nbsp; {new Date().getMonth() + 1}-{new Date().getDate()}-
        {new Date().getUTCFullYear()}
      </div>
    </div>
  );
};

export default FooterPanel;

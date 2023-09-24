import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Footer = () => {
  return (
    <div className="footer-parent">
      <div className="footer-icon">
        <FacebookIcon />
      </div>
      <div className="footer-icon">
        <InstagramIcon />
      </div>
      <div className="footer-icon">
        <YouTubeIcon />
      </div>
      <div className="footer-icon">
        <TwitterIcon />
      </div>
    </div>
  );
};

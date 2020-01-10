import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function footer() {
  return (
    <div className="footer-content">
      <a href="https://www.linkedin.com/in/filipemarron/">
        <LinkedInIcon fontSize="large" style={{ color: "gray" }} />
      </a>
      <a href="https://github.com/filipezz">
        <GitHubIcon fontSize="large" style={{ color: "gray" }} />
      </a>
    </div>
  );
}

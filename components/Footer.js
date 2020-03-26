import React from "react";

function Footer(props) {
  let year = new Date().getFullYear();

  return (
    <React.Fragment>
      <div className="fixed-bottom bg-dark text-white text center pt-3 pt-6">
        <p id="copyright">Copyright © Madhumitha {year}</p>
      </div>
    </React.Fragment>
  );
}

export default Footer;

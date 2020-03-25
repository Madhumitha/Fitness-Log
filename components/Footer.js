import React from "react";

function Footer(props) {
  let year = new Date().getFullYear();

  return (
    <React.Fragment>
      <footer>
        <p id="copyright">Copyright © Madhumitha {year}</p>
      </footer>
    </React.Fragment>
  );
}

export default Footer;

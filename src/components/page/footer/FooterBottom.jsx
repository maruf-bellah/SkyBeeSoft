/** @format */

import React from "react";

const FooterBottom = () => {
  return (
    <div>
      <div class='container-fluid copyright py-4'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-6 text-center text-md-start mb-3 mb-md-0'>
              ©{" "}
              <a class='fw-medium text-light' href='#'>
                Your Site Name
              </a>
              , All Right Reserved.
            </div>
            <div class='col-md-6 text-center text-md-end'>
              Designed By{" "}
              <a class='fw-medium text-light' href='https://htmlcodex.com'>
                HTML Codex
              </a>
              Distributed By{" "}
              <a class='fw-medium text-light' href='https://themewagon.com'>
                ThemeWagon
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;

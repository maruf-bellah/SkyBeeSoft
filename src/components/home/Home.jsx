/** @format */

import React from "react";
import Topbar from "../page/topbar/Topbar";
import Navbar from "../page/navbar/Navbar";
import Banner from "../page/banner/Banner";
import BnnerBottom from "../page/banner/BnnerBottom";
import About from "../page/about/About";
import Service from "../page/service/Service";
import Project from "../page/project/Project";
import Contract from "../page/contract/Contract";
import Team from "../page/team/Team";
import Footer from "../page/footer/Footer";
import FooterBottom from "../page/footer/FooterBottom";
import Client from "../page/client/Client";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Banner />
      <BnnerBottom />
      <About />
      <Service />
      <Project />
      <Contract />
      <Team />
      {/* <Client /> */}
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default Home;

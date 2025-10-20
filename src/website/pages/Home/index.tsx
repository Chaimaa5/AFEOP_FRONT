import React from "react";
import About from "../../components/HomeSections/About";
import Statistics from "../../components/HomeSections/Numbers";
import Applications from "../../components/HomeSections/Applications";
import Articles from "../../components/HomeSections/Articles";
import ProjectHighlight from "../../components/HomeSections/ProjectHighlight";
import ParallaxTransition from "../../components/HomeSections/ParallaxTransition";
import WebsiteLayout from "../../components/Layout/WebsiteLayout";

const VerdaAgroHomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <WebsiteLayout>
      <ParallaxTransition />
      <About />
      <ProjectHighlight />
      <Statistics />
      <Applications />
      <Articles/>
      </WebsiteLayout>
    </div>
  );
};

export default VerdaAgroHomePage;

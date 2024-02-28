import React from "react";
import MainCarosel from "../../HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../HomeSectionCarosel/HomeSectionCarosel";
import { mens_kurta } from "../../../../Data/mens_kurta";

const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      <div className="spacy-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosel data={mens_kurta } sectionName={"Men"}/>
        <HomeSectionCarosel data={mens_kurta } sectionName={"Woman"}/>
        <HomeSectionCarosel data={mens_kurta } sectionName={"Shoes"}/>
        <HomeSectionCarosel data={mens_kurta } sectionName={"T-shirt"}/>
      </div>
    </div>
  );
};

export default HomePage;

import React from "react";
import HomeAboutUs from "./AboutUs/HomeAboutUs";
import HomeContact from "./Contact/HomeContact";
import HomeFourSteps from "./FourSteps/HomeFourSteps";
import HomeHeader from "./Header/HomeHeader";
import HomeThreeColumns from "./ThreeColumns/HomeThreeColumns";
import HomeWhoWeHelp from "./WhoWeHelp/HomeWhoWeHelp";

const Home = () => {
    return (
        <>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeFourSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <HomeContact />
        </>
    )
}

export default Home;

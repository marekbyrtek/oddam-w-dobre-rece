import React, { useState, createContext } from "react";
import { Element } from "react-scroll";
import WhoWeHelpHeader from "./WhoWeHelpHeader";
import WhoWeHelpList from "./WhoWeHelpList";
import WhoWeHelpSwitch from "./WhoWeHelpSwitch";

export const ListContext = createContext("")

const HomeWhoWeHelp = () => {
    const [apiList, setApiList] = useState("foundations")
    
    return (
        <Element name="whoWeHelp" className="whoWeHelp">
            <ListContext.Provider value={{ apiList, setApiList }}>
                <WhoWeHelpHeader />
                <WhoWeHelpSwitch />
                <WhoWeHelpList />
            </ListContext.Provider>
        </Element>
    )
}

export default HomeWhoWeHelp;

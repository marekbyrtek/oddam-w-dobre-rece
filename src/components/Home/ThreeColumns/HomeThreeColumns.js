import React from "react";
import { Element } from "react-scroll";
import ThreeColumnsArticle from "./ThreeColumnsArticle";

const HomeThreeColumns = () => {
    return (
        <Element name="threeColumns" className="threeColumns">
            <ThreeColumnsArticle number="10" name="oddanych worków" />
            <ThreeColumnsArticle number="5" name="wspartych organizacji" />
            <ThreeColumnsArticle number="7" name="zorganizowanych zbiórek" />
        </Element>
    )
}

export default HomeThreeColumns;

import React from "react";
import FourStepsArticle from "./FourStepsArticle";
import icon1 from "../../../assets/Icon-1.svg";
import icon2 from "../../../assets/Icon-2.svg";
import icon3 from "../../../assets/Icon-3.svg";
import icon4 from "../../../assets/Icon-4.svg";

const FourStepsContent = () => {
    return (
        <div className="fourSteps_content">
            <FourStepsArticle icon={icon1} header="Wybierz rzeczy" content="ubrania, zabawki, sprzęt i inne" />
            <FourStepsArticle icon={icon2} header="Spakuj je" content="skorzystaj z worków na śmieci" />
            <FourStepsArticle icon={icon3} header="Zdecyduj komu chcesz pomóc" content="wybierz zaufane miejsce" />
            <FourStepsArticle icon={icon4} header="Zamów kuriera" content="kurier przyjedzie w dogodnym terminie" />
        </div>
    )
}

export default FourStepsContent;

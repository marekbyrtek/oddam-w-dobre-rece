import React from "react";

const FourStepsArticle = ({ icon, header, content }) => {
    return (
        <div className="fourSteps_article">
            <img src={icon} alt="icon" />
            <h5>{header}</h5>
            <div className="fourSteps_article-line" />
            <p>{content}</p>
        </div>
    )
}

export default FourStepsArticle;

import React from "react";

const ThreeColumnsArticle = ({ number, name }) => {
    return (
        <div className="threeColumns_article">
            <h1>{number}</h1>
            <h3>{name}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
        </div>
    )
}

export default ThreeColumnsArticle;

import React from "react";


const ToggleTheme = () => {
    const swapTheme = () => {
        let htmlDataSet = document.body.parentElement.dataset;
        let userMode = htmlDataSet.theme;
        htmlDataSet.theme = userMode === "0" ? "1" : "0";
        localStorage.setItem("theme", htmlDataSet.theme);
    };

    return (
        <>
            <button onClick={swapTheme}>Theme</button>

        </>
    );
};

(function () {
    let COLOR_THEME = localStorage.getItem("theme");
    
    if (COLOR_THEME) {
        let htmlDataSet = document.body.parentElement.dataset;
        htmlDataSet.theme = COLOR_THEME
        localStorage.setItem("theme", htmlDataSet.theme);
    } else {
        localStorage.setItem("theme", "0"); //default theme
    }
})();

export default ToggleTheme;

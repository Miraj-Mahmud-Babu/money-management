const logMe = document.querySelector("#login-btn");

logMe.addEventListener("click" , function(){
    // console.log("fokinni");

    const logArea = document.querySelector(".login-area");
    logArea.style.display = "none";
    const dash = document.querySelector("#dash-bord");
    dash.style.display = "block"
});

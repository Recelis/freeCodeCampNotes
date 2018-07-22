function clicked(ii){
    console.log(ii);
    let circleId = document.getElementById("circle" + ii);
    if (circleId.style.opacity == 100) circleId.style.opacity = 0;
    else circleId.style.opacity = 100;
}

// document ready in vanilla javascript
document.addEventListener("DOMContentLoaded", function() {
    // give boxes onclick functionality
    console.log("loading!!!!");
    let boxArr = ["box0","box1","box2","box3","box4","box5"];
    for (let ii =0; ii < 6; ii++){
        let id = document.getElementById(boxArr[ii]);
        id.addEventListener("click", ()=>clicked(ii));
    }
  });


// btns selector
document.getElementById("gallery__btn2018").onclick = function () {
  //color change
  document.getElementById("gallery__btn2018").style.color = "white";
  document.getElementById("gallery__btn2018").style.backgroundColor = "black";
  document.getElementById("gallery__btn2019").style.color = "black";
  document.getElementById("gallery__btn2019").style.backgroundColor = "white";
  document.getElementById("gallery__btn2017").style.color = "black";
  document.getElementById("gallery__btn2017").style.backgroundColor = "white";

  //data change
  document.querySelector(".gallery__crs .gallery__crs__cse__mnc h4").innerHTML =
    "2018";
  document.querySelector(".gallery__crs .gallery__crs__ee h4").innerHTML =
    "2018";
  document.querySelector(".gallery__crs .gallery__crs__me h4").innerHTML =
    "2018";
};
document.getElementById("gallery__btn2019").onclick = function () {
  //color change
  document.getElementById("gallery__btn2019").style.color = "white";
  document.getElementById("gallery__btn2019").style.backgroundColor = "black";
  document.getElementById("gallery__btn2018").style.color = "black";
  document.getElementById("gallery__btn2018").style.backgroundColor = "white";
  document.getElementById("gallery__btn2017").style.color = "black";
  document.getElementById("gallery__btn2017").style.backgroundColor = "white";

  //data change
  document.querySelector(".gallery__crs .gallery__crs__cse__mnc h4").innerHTML =
    "2019";
  document.querySelector(".gallery__crs .gallery__crs__ee h4").innerHTML =
    "2019";
  document.querySelector(".gallery__crs .gallery__crs__me h4").innerHTML =
    "2019";
};
document.getElementById("gallery__btn2017").onclick = function () {
  //color change
  document.getElementById("gallery__btn2017").style.color = "white";
  document.getElementById("gallery__btn2017").style.backgroundColor = "black";
  document.getElementById("gallery__btn2019").style.color = "black";
  document.getElementById("gallery__btn2019").style.backgroundColor = "white";
  document.getElementById("gallery__btn2018").style.color = "black";
  document.getElementById("gallery__btn2018").style.backgroundColor = "white";

  //data change
  document.querySelector(".gallery__crs .gallery__crs__cse__mnc h4").innerHTML =
    "2017";
  document.querySelector(".gallery__crs .gallery__crs__ee h4").innerHTML =
    "2017";
  document.querySelector(".gallery__crs .gallery__crs__me h4").innerHTML =
    "2017";
};

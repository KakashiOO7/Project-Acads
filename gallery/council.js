// btns selector
document.getElementById("gallery__btn2018").onclick = function () {
  //color change
  document.getElementById("gallery__btn2018").style.color = "white";
  document.getElementById("gallery__btn2018").style.backgroundColor = "#505050";
  document.getElementById("gallery__btn2019").style.color = "#505050";
  document.getElementById("gallery__btn2019").style.backgroundColor = "white";
  document.getElementById("gallery__btn2017").style.color = "#505050";
  document.getElementById("gallery__btn2017").style.backgroundColor = "white";

  //data change

  document.querySelector(".gallery__crs .gallery__crs__cse h4").innerHTML =
    "SIDDHARTH SINGH SOLANKI";
  document.querySelector(".gallery__crs .gallery__crs__ee h4").innerHTML =
    "SHUBHANSHU TOMER";
  document.querySelector(".gallery__crs .gallery__crs__me h4").innerHTML =
    "RAHUL GOYAT";
  //PHOTO CHANGE
  document.querySelector(".gallery__crs .gallery__crs__cse img").src =
    "./gallery/photos/Siddharth_Singh_Solanki - Siddharth Solanki.JPG";
  document.querySelector(".gallery__crs .gallery__crs__ee img").src =
    "./gallery/photos/shubhanshu_tomer - Shubhanshu Tomar.jpg";
  document.querySelector(".gallery__crs .gallery__crs__me img").src =
    "./gallery/photos/rahul_goyat - Rahul Goyat.jpg";
  //element hide
  document.querySelector(".gallery__crs .gallery__crs__mnc").style.display =
    "none";
};
document.getElementById("gallery__btn2019").onclick = function () {
  //color change
  document.getElementById("gallery__btn2019").style.color = "white";
  document.getElementById("gallery__btn2019").style.backgroundColor = "#505050";
  document.getElementById("gallery__btn2018").style.color = "#505050";
  document.getElementById("gallery__btn2018").style.backgroundColor = "white";
  document.getElementById("gallery__btn2017").style.color = "#505050";
  document.getElementById("gallery__btn2017").style.backgroundColor = "white";

  //data change
  document.querySelector(".gallery__crs .gallery__crs__mnc h4").innerHTML =
    "SATVIK BHATNAGAR";
  document.querySelector(".gallery__crs .gallery__crs__cse h4").innerHTML =
    "RAGHVENDRA SINGH";
  document.querySelector(".gallery__crs .gallery__crs__ee h4").innerHTML =
    "SHUBHAM GARG";
  document.querySelector(".gallery__crs .gallery__crs__me h4").innerHTML =
    "MAYANK SHRESHTHA";
  //PHOTO CHANGE
  document.querySelector(".gallery__crs .gallery__crs__mnc img").src =
    "./gallery/photos/Photograph - SATVIK BHATNAGAR.jpg";
  document.querySelector(".gallery__crs .gallery__crs__cse img").src =
    "./gallery/photos/Raghvendra_Singh - RAGHVENDRA SINGH.jpg";
  document.querySelector(".gallery__crs .gallery__crs__ee img").src =
    "./gallery/photos/Shubham_Garg - SHUBHAM GARG.jpg";
  document.querySelector(".gallery__crs .gallery__crs__me img").src =
    "./gallery/photos/mayank_shreshtha - MAYANK SHRESHTHA.jpg";
  //element hide
  document.querySelector(".gallery__crs .gallery__crs__mnc").style.display =
    "flex";
};

document.getElementById("gallery__btn2017").onclick = function () {
  //color change
  document.getElementById("gallery__btn2017").style.color = "white";
  document.getElementById("gallery__btn2017").style.backgroundColor = "#505050";
  document.getElementById("gallery__btn2019").style.color = "#505050";
  document.getElementById("gallery__btn2019").style.backgroundColor = "white";
  document.getElementById("gallery__btn2018").style.color = "#505050";
  document.getElementById("gallery__btn2018").style.backgroundColor = "white";

  //data change

  document.querySelector(".gallery__crs .gallery__crs__cse h4").innerHTML =
    "RAJ JAGTAP";
  document.querySelector(".gallery__crs .gallery__crs__ee h4").innerHTML =
    "SATYENDRA";
  document.querySelector(".gallery__crs .gallery__crs__me h4").innerHTML =
    "RUTVIK KEVADIYA";
  // PHOTO CHANGE
  document.querySelector(".gallery__crs .gallery__crs__cse img").src =
    "./gallery/photos/raj_jagtap - Raj Jagtap.JPG";
  document.querySelector(".gallery__crs .gallery__crs__ee img").src =
    "./gallery/photos/Satyendra - Satyendra IIT.jpg";
  document.querySelector(".gallery__crs .gallery__crs__me img").src =
    "./gallery/photos/Rutvik_Kevadiya - Kevadiya Jayeshbhai.jpg";

  //element hide
  document.querySelector(".gallery__crs .gallery__crs__mnc").style.display =
    "none";
};

window.addEventListener("scroll", function(){
    var scrollA = document.getElementById("nav");
    scrollA.classList.toggle("temp", window.scrollY > 1)
})

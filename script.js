let topButton = document.querySelector (".top_page")
let header = document.querySelector ("header")
let heading = document.querySelector ("h1")

window.addEventListener("scroll", function(){
    if(window.scrollY > 100){
        topButton.style.display = "block"
        header.style.height = "60px"
        heading.style.lineHeight = "60px"

    } else {
        topButton.style.display = "none"
        header.style.height = "80px"
        heading.style.lineHeight = "80px"
    }
})
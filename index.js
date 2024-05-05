let fasolid  = document.querySelector(".fa-solid")
let navres = document.querySelector(".nav-res")
let nav = document.querySelector(".nav")


fasolid.addEventListener("click", () => {
    navres.classList.toggle("nav-res")
    nav.classList.toggle("nav")
})


let qna1 = document.querySelector(".qna1")
let ans = document.querySelector(".ans")
let boxclick = document.querySelector(".box-click")
let box1 = document.querySelector(".box1")
box1.addEventListener("click", () => {
    qna1.classList.toggle("qna1")
    ans.classList.toggle("ans")
    boxclick.classList.toggle("box-click")
}
)
let qna2 = document.querySelector(".qna2")
let box2 = document.querySelector(".box2")
let ans2 = document.querySelector(".ans2")
let boxclick2 = document.querySelector(".box-click2")
box2.addEventListener("click", () => {
    qna2.classList.toggle("qna2")
    ans2.classList.toggle("ans2")
    boxclick2.classList.toggle("box-click2")
})
let qna3 = document.querySelector(".qna3")
let box3 = document.querySelector(".box3")
let ans3 = document.querySelector(".ans3")
let boxclick3 = document.querySelector(".box-click3")
box3.addEventListener("click", () => {
    qna3.classList.toggle("qna3")
    ans3.classList.toggle("ans3")
    boxclick3.classList.toggle("box-click3")
})

let qna4 = document.querySelector(".qna4")
let box4 = document.querySelector(".box4")
let ans4 = document.querySelector(".ans4")
let boxclick4 = document.querySelector(".box-click4")
box4.addEventListener("click", () => {
    qna4.classList.toggle("qna4")
    ans4.classList.toggle("ans4")
    boxclick4.classList.toggle("box-click4")
})
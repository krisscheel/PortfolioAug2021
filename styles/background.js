const sections = document.querySelectorAll("section")
const bodyTag = document.querySelector("body")

const addMovement = function () {
  const topViewport = window.pageYOffset
  const midViewport = topViewport + (window.innerHeight / 2)

  //find the middle of each section
  sections.forEach((section, index) => {
    const topSection = section.offsetTop
    const midSection = topSection + (section.offsetHeight / 2)

    //how far away is the section from the visible area of the page
    const distanceToSection = midViewport - midSection

    //check the background color
    if (distanceToSection > -100) {
      const dataBackground = section.getAttribute("data-background")
      bodyTag.style.backgroundColor = "red"
    }

  })
}

addMovement()

document.addEventListener("scroll", function () {
  addMovement()
})

window.addEventListener("resize", function () {
  addMovement()
})
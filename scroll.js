const pixelsTag = document.querySelector("div.pixels")
const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")
const sections = document.querySelectorAll("section")
const circleTag = document.querySelector("div.circle")


//when we scroll the page, make a progress bar that keeps track of the distance
document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollableDistance = pageHeight - window.innerHeight

  const percentage = pixels / totalScrollableDistance

  progressTag.style.width = `${100 * percentage}%`
})

// when we scroll the page, see how far down we've scrolled
//for each section, check to see if we have passed it 
// if we have, then update the left Nav indicator circle
document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset

  sections.forEach(section => {
    if (section.offsetTop - 100 <= pixels) {
      circleTag.style.backgroundColor = section.getAttribute("data-sect")
    }
  })
})
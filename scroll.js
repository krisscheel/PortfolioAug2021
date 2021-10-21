const pixelsTag = document.querySelector("div.pixels")
const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")
const sections = document.querySelectorAll("section")
const circleTags = document.querySelectorAll("div.circle")
let selectedSection = 0

const headerTag = document.querySelector("header")


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
    if (section.offsetTop - 200 <= pixels) {
      const sectionNumber = parseInt(section.getAttribute("data-sect"))
      if (sectionNumber != selectedSection) {
        let selector = `div.circle[data-circle="${selectedSection}"`
        const selectedCircleTag = document.querySelector(selector)
        selectedCircleTag.classList.remove("selected")

        selector = `div.circle[data-circle="${sectionNumber}"]`
        const newCircle = document.querySelector(selector)
        newCircle.classList.add("selected")
        selectedSection = sectionNumber
      }
    }
  })
})


//change the color of the fixed header as the user scrolls down the page
const toggleHeader = function () {
  const pixels = window.pageYOffset

  if (pixels > 300) {
    headerTag.classList.add("scrolled")
  } else {
    headerTag.classList.remove("scrolled")
  }
}

toggleHeader()

document.addEventListener("scroll", function () {
  toggleHeader()
})
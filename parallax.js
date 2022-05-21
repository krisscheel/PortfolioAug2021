

const parallaxSections = document.querySelectorAll("section");

document.addEventListener("scroll", function () {
  const topViewport = window.pageYOffset;
  const midViewport = topViewport + window.innerHeight / 2;

  parallaxSections.forEach((section) => {
    const topSection = section.offsetTop;
    const midSection = topSection + section.offsetHeight / 2;

    const distanceToSection = midViewport - midSection;

    const parallaxTags = section.querySelectorAll(`[data-parallax]`);

    // loop over each parallaxed tag
    parallaxTags.forEach((tag) => {
      const speed = parseFloat(tag.getAttribute("data-parallax"));

      tag.style.transform = `translate(0, ${distanceToSection * speed}px)`;
    });
  });
});













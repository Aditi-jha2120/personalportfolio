let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        let matchingLink = document.querySelector(
          'header nav a[href="#' + id + '"]'
        );
        if (matchingLink) {
          // ✅ Ensure the element exists before accessing classList
          matchingLink.classList.add("active");
        }
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

document.getElementById("read-more-btn").addEventListener("click", function () {
  var moreContent = document.getElementById("more-content");
  if (moreContent.style.display === "none") {
    moreContent.style.display = "block";
    this.innerHTML = "Read Less"; // Change button text to "Read Less"
  } else {
    moreContent.style.display = "none";
    this.innerHTML = "Read More"; // Change button text back to "Read More"
  }
});

document.getElementById("hire-me-btn").addEventListener("click", function () {
  const email = "aditi.j2103@gmail.com";
  const subject = "Hiring Inquiry";
  const body =
    "Hello Aditi,\n\nI would love to discuss a potential opportunity with you. Please let me know your availability.\n\nBest regards,\n[Your Name]";

  window.location.href = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
});

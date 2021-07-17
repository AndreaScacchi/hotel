// ********** set date ************
// select span
const date = (document.getElementById(
    "date"
).innerHTML = new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
    links.classList.toggle("show-links");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
    link.addEventListener("click", e => {
    // prevent default
    e.preventDefault();
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    let position = element.offsetTop - 62;

    window.scrollTo({
        left: 0,
      // top: element.offsetTop,
        top: position,
        behavior: "smooth"
        });
    });
});

//when the user clicks on the button, scroll to the top of the document
const buttonTop = function() {
    const btnTop = document.querySelector('.btn-top');
    btnTop.addEventListener("click", () => {
        window.scroll({ behavior: 'smooth', top: 0 });
    })
};
buttonTop();

// validate email for the newsletters
const validateEmail = () => {
    let email = document.querySelector('.form-control');
    const emailBtn = document.querySelector('.btn-submit');
    emailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (email.value === '') {
            alert(`please add a correct email address!`.toUpperCase());
        } else{
            alert(`thanks for reaching us!`.toUpperCase());
            email.value = '';
        }
    })
}
validateEmail();
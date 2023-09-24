$(function() {
    // Init Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        navText:["<img src='./assets/icons/prev.svg' />", "<img src='./assets/icons/next.svg' />"],
        responsive:{
            0:{
                items:1,
                margin:5,
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    // Toggle navigation menu on mobile
    const toggler = document.querySelector('.nav-toggler');
    const nav_menu = document.querySelector('.navbar-collapse');

    toggler.addEventListener('click', function() {
        nav_menu.classList.toggle('menu-show');
    })


    // Register Form Validation
    const registerForm = document.getElementById('register_form');
    const error = document.getElementById('error');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        error.innerHTML = '';

        // Validate the form
        let isFormValid = true;

        if(username.length < 3) {
            isFormValid = false;
            error.innerHTML = '* Username name must be atleast 3 characters';
        } else if(!emailPattern.test(email)) {
            isFormValid = false;
            error.innerHTML = '* Please enter a valid email address';
        } 

        // Submit the form if valid
        if(isFormValid) {
            this.submit();
        }
    })
})
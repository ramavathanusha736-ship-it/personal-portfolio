/* =====================================================
PERSONAL PORTFOLIO JAVASCRIPT
===================================================== */


/* =====================================================
1. WELCOME BUTTON
===================================================== */

const welcomeButton =
    document.getElementById("welcomeButton");


welcomeButton.addEventListener("click", () => {

    alert(
        "Welcome to Anusha's Personal Portfolio!"
    );

});



/* =====================================================
2. DARK / LIGHT MODE
===================================================== */

const themeButton =
    document.getElementById("themeButton");


themeButton.addEventListener("click", () => {

    /*
    Add or remove dark-mode class
    */

    document.body.classList.toggle("dark-mode");


    /*
    Check current mode
    */

    if (document.body.classList.contains("dark-mode")) {

        // DARK MODE

        themeButton.innerHTML =
            "☀️ Light Mode";


        themeButton.classList.remove(
            "btn-outline-dark"
        );


        themeButton.classList.add(
            "btn-outline-light"
        );

    }

    else {

        // LIGHT MODE

        themeButton.innerHTML =
            "🌙 Dark Mode";


        themeButton.classList.remove(
            "btn-outline-light"
        );


        themeButton.classList.add(
            "btn-outline-dark"
        );

    }

});



/* =====================================================
3. PROJECT FILTERING
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");


const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /*
        Get selected category
        */

        const filter =
            button.getAttribute("data-filter");


        /*
        Change button appearance
        */

        filterButtons.forEach(btn => {

            btn.classList.remove(
                "btn-primary"
            );

            btn.classList.add(
                "btn-outline-primary"
            );

        });


        button.classList.remove(
            "btn-outline-primary"
        );

        button.classList.add(
            "btn-primary"
        );


        /*
        Show / hide projects
        */

        projectCards.forEach(card => {

            const category =
                card.getAttribute("data-category");


            if (
                filter === "all" ||
                category === filter
            ) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    });

});



/* =====================================================
4. CONTACT FORM VALIDATION
===================================================== */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", (event) => {

    /*
    Prevent actual form submission
    */

    event.preventDefault();


    /*
    Get form values
    */

    const name =
        document.getElementById("name")
        .value
        .trim();


    const email =
        document.getElementById("email")
        .value
        .trim();


    const message =
        document.getElementById("message")
        .value
        .trim();


    const formMessage =
        document.getElementById("formMessage");


    /*
    Clear previous message
    */

    formMessage.className = "";

    formMessage.textContent = "";



    /* -------------------------------------------------
    NAME VALIDATION
    ------------------------------------------------- */

    if (name === "") {

        formMessage.textContent =
            "Please enter your name.";

        formMessage.classList.add(
            "error-message"
        );

        return;
    }



    /* -------------------------------------------------
    EMAIL VALIDATION
    ------------------------------------------------- */

    if (email === "") {

        formMessage.textContent =
            "Please enter your email.";

        formMessage.classList.add(
            "error-message"
        );

        return;
    }


    /*
    Email pattern
    */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "Please enter a valid email address.";

        formMessage.classList.add(
            "error-message"
        );

        return;
    }



    /* -------------------------------------------------
    MESSAGE VALIDATION
    ------------------------------------------------- */

    if (message === "") {

        formMessage.textContent =
            "Please enter your message.";

        formMessage.classList.add(
            "error-message"
        );

        return;
    }



    /* -------------------------------------------------
    SUCCESS
    ------------------------------------------------- */

    formMessage.textContent =
        "✓ Message sent successfully!";

    formMessage.classList.add(
        "success-message"
    );


    /*
    Clear form after successful submission
    */

    contactForm.reset();

});
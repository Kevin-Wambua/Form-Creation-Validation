document.addEventListener("DOMContentLoaded", function () {
    const Form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    Form.addEventListener("submit", function (event) {
        event.preventDefault(); // prevent actual form submission

        // get and trim  user inputs
        const username = document.getElementById("username").Value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let isValid = true;
        const messages = [];

        //Username validation
        if (username.length < 3 ) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.")
        }
        //Email validation
        if(!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Email must contain '@' and '.'.");
        }

        //password Validation
        if (password.length < 8) {
            isValid  = false;
            messages.push("Password must be at least 8 characters long.");
        }
        // show feedback
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; //green
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; //red
        }
    });
});
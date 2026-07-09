document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("o4TiHWTWUz5by-xOB");

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
    
        const btn = document.getElementById("submitBtn");
        btn.disabled = true;
        btn.textContent = "Sending...";

        const templateParams = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        emailjs.send("service_aqwvfi9", "template_kf26mhd", templateParams)
            .then(function (response) {
                showPopup("success", "Email sent successfully!");
                console.log(response);
                form.reset();
            })
            .catch(function (error) {
                showPopup("error", "Failed to send email. Please try again.");
                console.log(error);
            })
            .finally(function () {
                btn.disabled = false;
                btn.textContent = "Send Message";
            });
    });
});

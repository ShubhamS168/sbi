document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    const dashboard = document.getElementById("dashboard");
    const userName = document.getElementById("user-name");

    // Simulated registration process (replace with actual logic)
    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        // Store user data in the database or send it to the server for registration
        // For simplicity, let's assume registration is successful
        dashboard.style.display = "block";
        userName.textContent = name;
        registrationForm.reset();
    });
});


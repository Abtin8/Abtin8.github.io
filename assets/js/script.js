document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById("submit");
    submitBtn.classList.add("clicked");
    setTimeout(() => submitBtn.classList.remove("clicked"), 150);

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let usernameMsg = document.getElementById("usernameMsg");
    let emailMsg = document.getElementById("emailMsg");
    let passwordMsg = document.getElementById("passwordMsg");
    let confirmPasswordMsg = document.getElementById("confirmPasswordMsg");
    let successMsg = document.getElementById("successMsg");

    let isValid = true;

    if (username === "") {
        usernameMsg.textContent = "این فیلد نمی‌تواند خالی باشد.";
        usernameMsg.className = "error";
        isValid = false;
    } else if (username.length < 8) {
        usernameMsg.textContent = "نام کاربری باید حداقل ۸ کاراکتر باشد.";
        usernameMsg.className = "error";
        isValid = false;
    } else {
        usernameMsg.textContent = "نام کاربری معتبر است.";
        usernameMsg.className = "success";
    }

    if (email === "") {
        emailMsg.textContent = "ایمیل نمی‌تواند خالی باشد.";
        emailMsg.className = "error";
        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        emailMsg.textContent = "ایمیل وارد شده معتبر نیست.";
        emailMsg.className = "error";
        isValid = false;
    } else {
        emailMsg.textContent = "ایمیل معتبر است.";
        emailMsg.className = "success";
    }

    if (password === "") {
        passwordMsg.textContent = "مقدار رمز عبور خالی است و باید رمز عبوری معتبر وارد کنید.";
        passwordMsg.className = "error";
        isValid = false;
    } else if (password.length < 8) {
        passwordMsg.textContent = "رمز عبور باید حداقل ۸ کاراکتر باشد.";
        passwordMsg.className = "error";
        isValid = false;
    } else if ((!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test(password))) {
        passwordMsg.textContent = "رمز عبور باید از ترکیب حروف بزرگ و کوچک اعداد و نمادها تشکیل شده باشد."
        passwordMsg.className = "error"
        isValid = false;
    } else {
        passwordMsg.textContent = "رمز عبور معتبر است.";
        passwordMsg.className = "success";
    }

    if (isValid === true) {
        if (confirmPassword === "") {
            confirmPasswordMsg.textContent = "لطفاً رمز عبور را دوباره وارد کنید.";
            confirmPasswordMsg.className = "error";
            isValid = false;
        } else if (confirmPassword !== password) {
            confirmPasswordMsg.textContent = "مقدار رمز عبور باید مشابه رمز عبور قبلی باشد.";
            confirmPasswordMsg.className = "error";
            isValid = false;
        } else {
            confirmPasswordMsg.textContent = "تأیید رمز عبور صحیح است.";
            confirmPasswordMsg.className = "success";
        }
    }
    
    if (isValid) {
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("confirmPassword", confirmPassword)
        document.getElementById("success").style.display = 'block';
    } else {
        successMsg.textContent = "";
    }
});

function togglePassword(id) {
    const input = document.getElementById(id);
    const currentType = input.getAttribute("type");
    input.setAttribute("type", currentType === "password" ? "text" : "password");}

window.addEventListener("load", function () {
    const savedUsername = localStorage.getItem("username");
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    const savedConfirmPassword = localStorage.getItem("confirmPassword")

    if (savedUsername) {
        document.getElementById("username").value = savedUsername;
    }
    if (savedEmail) {
        document.getElementById("email").value = savedEmail;
    }
    if (savedPassword) {
        document.getElementById("password").value = savedPassword;
    }
    if (savedConfirmPassword) {
        document.getElementById("confirmPassword").value = savedConfirmPassword
    }
});
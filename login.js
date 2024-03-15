document.getElementById("form_login").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var loginUser = document.getElementById("loginUser").value;
    var loginPass = document.getElementById("loginPass").value;
    
    if (loginUser === "") {
        showError("Vui lòng nhập tên đăng nhập");
    } else if (loginPass === "") {
        showError("Vui lòng nhập mật khẩu");
    } else {
        alert("Đăng nhập thành công");   
    }
});

document.getElementById("form_signup").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var signupUser = document.getElementById("signupUser").value;
    var signupEmail = document.getElementById("signupEmail").value;
    var signupPass = document.getElementById("signupPass").value;
    var ConfirmPassword = document.getElementById("ConfirmPassword").value;

    if (signupUser === "") {
        showError("Vui lòng nhập tên người dùng");
    } else if (signupEmail === "") {
        showError("Vui lòng nhập email");
    } else if (signupPass === "") {
        showError("Vui lòng nhập mật khẩu");
    } else if (signupPass !== ConfirmPassword) {
        showError("Mật khẩu xác nhận không khớp");
    } else {
        alert("Đăng ký thành công"); 
    }
});

function showError(errorMessage) {
    var errorElement = document.createElement("p");
    errorElement.classList.add("error");
    errorElement.textContent = errorMessage;
    document.body.appendChild(errorElement);
}

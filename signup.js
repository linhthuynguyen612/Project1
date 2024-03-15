
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
        alert("Mật khẩu xác nhận không khớp, Vui lòng nhập lại");
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

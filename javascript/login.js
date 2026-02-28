function checkLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === '123') {
        alert('Đăng nhập thành công');
        window.location.href = '/index.html';
    } else {
        alert('Nhập sai tài khoản hoặc mật khẩu.');
    }
}

function showSignupForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('recoveryForm').style.display = 'none'; // Ẩn form khôi phục
}

function showLoginForm() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('recoveryForm').style.display = 'none'; // Ẩn form khôi phục
}

function showRecoveryForm() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('recoveryForm').style.display = 'block'; // Ẩn form khôi phục
}

function signup() {
    var newUsername = document.getElementById('newUsername').value;
    var newEmail = document.getElementById('newEmail').value;
    var newPassword = document.getElementById('newPassword').value;
    var agreeCheckbox = document.getElementById('Agree');

    if (newUsername.trim() === '' || newEmail.trim() === '' || newPassword.trim() === '' || !agreeCheckbox.checked) {
        alert('Vui lòng điền đầy đủ thông tin và đồng ý với các điều khoản.');
    } else {
        alert('Đăng ký thành công. Bạn có thể sử dụng tài khoản mới để đăng nhập.');
    }
}

function sendRecoveryRequest() {
    var recoveryEmailPhone = document.getElementById('recoveryEmailPhone').value;
    var recoveryOption = document.querySelector('input[name="recoveryOption"]:checked');

    if (recoveryEmailPhone.trim() === '' || !recoveryOption) {
        alert('Vui lòng nhập địa chỉ email hoặc số điện thoại và chọn hình thức khôi phục.');
    } else {
        // Gửi yêu cầu khôi phục tài khoản đến server
        recoveryRequest(recoveryEmailPhone, recoveryOption.value);
        alert('Yêu cầu khôi phục tài khoản đã được gửi. Vui lòng kiểm tra ' + recoveryOption.value + ' của bạn.');
        // Tự động chuyển về form đăng nhập sau khi gửi yêu cầu
        showLoginForm();
    }
}

function recoveryRequest(emailPhone, option) {
    console.log('Gửi yêu cầu khôi phục đến ' + emailPhone + ' qua ' + option);
}

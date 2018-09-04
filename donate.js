var notice = document.getElementById('gpay-notice-div');
var email = document.getElementById("gpay-email");

function copyEmail() {
    "use strict";
    email.select();
    document.execCommand("copy");
}

function openNotice() {
    "use strict";
    notice.style.display = "block";
    copyEmail();
}

function closeNotice() {
    "use strict";
    notice.style.display = "none";
}

function openPayPal() {
    "use strict";
    window.open('https://paypal.me/noahajac2', '_blank');
}

function openGooglePay() {
    "use strict";
    window.open('https://pay.google.com/payments/home?p2p_action=send', '_blank');
    closeNotice();
}

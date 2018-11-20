var notice = document.getElementById("gpay-notice-div");
var email = document.getElementById("gpay-email");
var gPayButtonLink = document.getElementById("gpay-button-link");
var gPayButton = document.getElementById("gpay-button");
var payPalButtonLink = document.getElementById("paypal-button-link");
var payPalButton = document.getElementById("paypal-button");
gPayButtonLink.removeAttribute("href");
gPayButton.innerHTML = "Google Pay";
payPalButtonLink.removeAttribute("href");
payPalButton.innerHTML = "PayPal";

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
    window.open("https://paypal.me/noahajac2", "_blank");
}

function openGooglePay() {
    "use strict";
    window.open("https://pay.google.com/payments/home?p2p_action=send", "_blank");
    closeNotice();
}

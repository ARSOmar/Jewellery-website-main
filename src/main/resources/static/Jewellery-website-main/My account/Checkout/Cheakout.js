function submitOrder() {
    var fullname = document.getElementById('fullname').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;

    var billingFullname = document.getElementById('billing-fullname').value;
    var billingAddress = document.getElementById('billing-address').value;
    var billingCity = document.getElementById('billing-city').value;
    var billingCountry = document.getElementById('billing-country').value;

    var cardNumber = document.getElementById('card-number').value;
    var expirationDate = document.getElementById('expiration-date').value;
    var cvv = document.getElementById('cvv').value;

    var paymentMethod = document.getElementById('payment-method').value;

    console.log("Full Name:", fullname);
    console.log("Address:", address);
    console.log("City:", city);
    console.log("Country:", country);

    console.log("Billing Full Name:", billingFullname);
    console.log("Billing Address:", billingAddress);
    console.log("Billing City:", billingCity);
    console.log("Billing Country:", billingCountry);

    console.log("Card Number:", cardNumber);
    console.log("Expiration Date:", expirationDate);
    console.log("CVV:", cvv);

    console.log("Payment Method:", paymentMethod);
}

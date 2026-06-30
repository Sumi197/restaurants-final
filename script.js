function bookTable(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let guests = document.getElementById("guests").value;

    let msg = document.getElementById("msg");

    if (name && phone && date && guests) {
        msg.innerText = `Booking Confirmed for ${name} 🎉`;
        msg.style.color = "green";
    } else {
        msg.innerText = "Please fill all fields";
        msg.style.color = "red";
    }
}
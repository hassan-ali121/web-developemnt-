function bookRoom() {
  var arrivalDateInput = document.getElementById("arrivalDate");
  var departureDateInput = document.getElementById("departureDate");

  // Validate if both arrival and departure dates are selected
  var arrivalDate = arrivalDateInput.value;
  var departureDate = departureDateInput.value;

  if (arrivalDate === "" || departureDate === "") {
    alert("Please select both arrival and departure dates.");
    return;
  }

  // Ask for room type
  var roomType = prompt("Select a room type:\n1. Single Room\n2. Double Room");

  // Check the user's choice
  if (roomType === "1") {
    roomType = "Single Room";
  } else if (roomType === "2") {
    roomType = "Double Room";
  } else {
    // Handle invalid input
    alert("Invalid selection. Please try again.");
    return;
  }

  // Ask for user name
  var userName = prompt("Enter your name:");

  // Display the booking information on the page
  var bookingInfoDiv = document.getElementById("booking-info");
  bookingInfoDiv.innerHTML = `
    <p class="booking-info-text">Booking Information:</p>
    <p><strong>User:</strong> ${userName}</p>
    <p><strong>Room Type:</strong> ${roomType}</p>
    <p><strong>Dates:</strong> ${arrivalDate} to ${departureDate}</p>
    <br>
    <div id="cancelButtonDiv" class="cancel-message">Booking can be canceled. <button onclick="cancelBooking()" class="cancel-button">Cancel Booking</button></div>
  `;

  // Update the book button
  var bookButton = document.getElementById("bookButton");
  bookButton.textContent = "Booked";
  bookButton.disabled = true; // Disable the button after booking
}

function cancelBooking() {
  console.log("Cancel Booking function called");
  // Clear the booking information
  var bookingInfoDiv = document.getElementById("booking-info");
  bookingInfoDiv.innerHTML = "Your booking is cancelled";

  // Update the book button
  var bookButton = document.getElementById("bookButton");
  bookButton.textContent = "Book Now";
  bookButton.disabled = false; // Enable the button

  // Recreate the cancel button div
  var cancelButtonDiv = document.getElementById("cancelButtonDiv");
  cancelButtonDiv.innerHTML = "Booking is cancelled.";

}

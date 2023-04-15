// // Wait for the document to finish loading before adding event listeners
// document.addEventListener("DOMContentLoaded", function () {
//   // Get the pop-up button and content elements
//   var popupButton = document.getElementById("popup-button");
//   var popup = document.getElementById("popup-content");

//   // Add an event listener to the pop-up button
//   popupButton.addEventListener("click", function (event) {
//     // Prevent the default behavior of the button
//     event.preventDefault();
//     // Show the pop-up
//     popup.style.display = "block";
//   });

//   // Get the form element
//   var form = document.querySelector("form");

//   // Add an event listener to the form when it's submitted
//   form.addEventListener("submit", function (event) {
//     // Prevent the default behavior of the form
//     event.preventDefault();

//     // Get the values of the form fields
//     var name = document.getElementById("name").value;
//     var surname = document.getElementById("surname").value;
//     var webpage = document.querySelector('input[name="webpage"]:checked').value;
//     var rating = document.querySelector('input[name="rating"]:checked').value;
//     var promise = document.querySelector('input[name="promise"]:checked').value;

//     // Log the form data to the console
//     console.log("Name: " + name);
//     console.log("Surname: " + surname);
//     console.log("Likes this webpage: " + webpage);
//     console.log("Thinks the webpage deserves 20 out of 10: " + rating);
//     console.log("Promises to give 20 out of 10: " + promise);

//     // Reset the form
//     form.reset();

//     // Hide the pop-up and the form
//     popup.style.display = "none";
//     form.style.display = "none";

//     // Create a thank you message element and add it to the page
//     var thankYouMessage = document.createElement("p");
//     thankYouMessage.textContent = "Thank you for your feedback, " + name + "!";
//     document.body.appendChild(thankYouMessage);
//   });
// });

// Wait for the document to finish loading before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Get the pop-up button and content elements
  var popupButton = document.getElementById("popup-button");
  var popup = document.getElementById("popup-content");

  // Add an event listener to the pop-up button
  popupButton.addEventListener("click", function (event) {
    // Prevent the default behavior of the button
    event.preventDefault();
    // Show the pop-up
    popup.style.display = "block";
  });

  // Get the form element
  var form = document.querySelector("form");

  // Add an event listener to the form when it's submitted
  form.addEventListener("submit", function (event) {
    // Prevent the default behavior of the form
    event.preventDefault();

    // Get the values of the form fields
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var webpage = document.querySelector('input[name="webpage"]:checked').value;
    var rating = document.querySelector('input[name="rating"]:checked').value;
    var promise = document.querySelector('input[name="promise"]:checked').value;

    // Log the form data to the console
    console.log("Name: " + name);
    console.log("Surname: " + surname);
    console.log("Likes this webpage: " + webpage);
    console.log("Thinks the webpage deserves 20 out of 10: " + rating);
    console.log("Promises to give 20 out of 10: " + promise);

    // Reset the form
    form.reset();

    // Hide the pop-up and the form
    popup.style.display = "none";
    form.style.display = "none";

    // Create a thank you message element and add it to the page
    var thankYouMessage = document.createElement("p");
    thankYouMessage.textContent = "Thank you for your feedback, " + name + "!";
    document.body.appendChild(thankYouMessage);

    // Hide the forum
    var forum = document.querySelector(".text--forum");
    forum.style.display = "none";
  });
});

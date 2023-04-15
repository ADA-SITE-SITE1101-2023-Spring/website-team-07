document.addEventListener("DOMContentLoaded", function () {
  var popupButton = document.getElementById("popup-button");
  var popup = document.getElementById("popup-content");

  popupButton.addEventListener("click", function (event) {
    event.preventDefault();

    popup.style.display = "block";
  });

  var form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var webpage = document.querySelector('input[name="webpage"]:checked').value;
    var rating = document.querySelector('input[name="rating"]:checked').value;
    var promise = document.querySelector('input[name="promise"]:checked').value;

    console.log("Name: " + name);
    console.log("Surname: " + surname);
    console.log("Likes this webpage: " + webpage);
    console.log("Thinks the webpage deserves 20 out of 10: " + rating);
    console.log("Promises to give 20 out of 10: " + promise);

    form.reset();

    popup.style.display = "none";
    form.style.display = "none";

    var thankYouMessage = document.createElement("p");
    thankYouMessage.textContent = "Thank you for your feedback, " + name + "!";
    document.body.appendChild(thankYouMessage);
  });
});

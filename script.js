// Function to display more details on click
function showDetails(planType) {
  var details = {
    detachedDuplex: "Detached duplexes offer privacy and space for families.",
    semiDetachedBungalow:
      "Two bedroom semi-detached bungalows are cozy and affordable.",
    terracedUnits:
      "Four bedroom terraced units provide ample room and communal living.",
    flats:
      "Two & three bedroom flats are perfect for small families or roommates.",
  };

  alert(details[planType]);
}

// Function to handle AJAX requests
function AJAX(data) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://www.lunohomes.com.ng", true); // Corrected URL
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // Handle successful response from the server
        alert("Success: " + xhr.responseText);
      } else {
        // Handle error
        alert("Error: " + xhr.statusText);
      }
    }
  };
  xhr.send(JSON.stringify({ message: data }));
}

// Basic form validation and AJAX request
document
  .getElementById("interestForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var package = document.getElementById("package").value;
    if (name && email && package) {
      // Process the form (send data to server, etc.)
      AJAX(
        "Thank you for your interest, " +
          name +
          "! We will contact you at " +
          email +
          "."
      );
    } else {
      alert("Please fill out all the fields.");
    }
  });

// Combined Event listeners for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll("#building-plans img");
  images.forEach(function (img) {
    img.addEventListener("click", function () {
      var planType = img.alt.toLowerCase().replace(/ /g, "");
      openModal(planType);
    });
  });

  var closeButton = document.getElementById("close-modal");
  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }
});

// Function to open a modal with details
function openModal(planType) {
  var details = {
    detachedDuplex: "Detached duplexes offer privacy and space for families.",
    semiDetachedBungalow:
      "Two bedroom semi-detached bungalows are cozy and affordable.",
    terracedUnits:
      "Four bedroom terraced units provide ample room and communal living.",
    flats:
      "Two & three bedroom flats are perfect for small families or roommates.",
  };

  // Set the content of the modal
  var modalContent = document.getElementById("modal-content");
  if (modalContent) {
    modalContent.textContent = details[planType];
  }

  // Display the modal
  var modal = document.getElementById("modal");
  if (modal) {
    modal.style.display = "block";
  }
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("modal");
  if (modal) {
    modal.style.display = "none";
  }
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
  var modal = document.getElementById("modal");
  if (event.target == modal) {
    closeModal();
  }
};

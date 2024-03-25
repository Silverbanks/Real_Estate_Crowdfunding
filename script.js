// Function to display more details in a modal
async function showDetails(planType) {
  const details = {
    detachedDuplex: "Detached duplexes offer privacy and space for families.",
    semiDetachedBungalow: "Two bedroom semi-detached bungalows are cozy and affordable.",
    terracedUnits: "Four bedroom terraced units provide ample room and communal living.",
    flats: "Two & three bedroom flats are perfect for small families or roommates.",
  };

  // Display the details in a modal
  openModal(details[planType]);
}

// Function to handle AJAX requests using fetch API
async function AJAX(data) {
  try {
    const response = await fetch("https://www.lunohomes.com.ng", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: data })
    });

    if (!response.ok) throw new Error(\Error: \${response.statusText}\);
    const responseData = await response.json();
    alert(\Success: \${responseData.message}\);
  } catch (error) {
    alert(error.message);
  }
}

// Basic form validation and AJAX request
document.getElementById("interestForm").addEventListener("submit", async function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const package = document.getElementById("package").value.trim();

  if (name && email && package) {
    await AJAX(\Thank you for your interest, \${name}! We will contact you at \${email}.\);
  } else {
    alert("Please fill out all the fields.");
  }
});

// Combined Event listeners for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("#building-plans img").forEach(img => {
    img.addEventListener("click", function () {
      const planType = img.alt.toLowerCase().replace(/ /g, "");
      showDetails(planType);
    });
  });

  const closeButton = document.getElementById("close-modal");
  closeButton?.addEventListener("click", closeModal);
});

// Function to open a modal with details
function openModal(detailText) {
  const modalContent = document.getElementById("modal-content");
  modalContent.textContent = detailText;

  const modal = document.getElementById("modal");
  modal.style.display = "block";
  modal.style.transition = "opacity 0.5s";
  modal.style.opacity = 1;
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.opacity = 0;
  setTimeout(() => modal.style.display = "none", 500); // Wait for the transition to finish
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
  if (event.target == document.getElementById("modal")) {
    closeModal();
  }
};

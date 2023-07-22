document.addEventListener("DOMContentLoaded", function () {
  const downloadButtons = document.querySelectorAll(".btn-download");
  const rightPane = document.querySelector(".right-pane");
  const image = document.querySelector(".right-pane img");
  const details = document.querySelector(".details");
  const optionLists = document.querySelectorAll(".option-list");

  downloadButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Show the details and hide the image
      rightPane.classList.remove("hide-image");
      image.style.display = "none";
      details.style.display = "block";

      const option = this.getAttribute("data-option");
      const optionListToShow = document.getElementById(`${option}-options`);
      optionLists.forEach((optionList) => {
        optionList.style.display = "none";
      });
      if (optionListToShow) {
        optionListToShow.style.display = "block";
      }
    });
  });

  const qaButton = document.querySelector('a[href="path_to_pdf_document.pdf"]');
  const contactButton = document.querySelector('a[href="https://whatsapp-group-link"]');
  const budgetButton = document.querySelector('a[href="https://budget-calculator-website-link"]');

  qaButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    // Replace 'path_to_pdf_document.pdf' with the actual URL of the Q&A PDF
    window.location.href = "path_to_pdf_document.pdf";
  });

  contactButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    // Replace 'https://whatsapp-group-link' with the actual URL of the WhatsApp group
    window.open("https://whatsapp-group-link", "_blank");
  });

  budgetButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    // Replace 'https://budget-calculator-website-link' with the actual URL of the budget calculator website
    window.open("https://budget-calculator-website-link", "_blank");
  });
});

function showTicketLinks() {
  clearRightPane();
  var ticketLinks = document.getElementById("ticketLinks");
  var links = [
    { name: "Khammam to Vishakapatanam", url: "https://example.com/kmm-to-vskp" },
    { name: "Vishakapatanam to Araku", url: "https://example.com/vskp-to-arku" },
    { name: "Vishakapatanam to Khammam", url: "https://example.com/vskp-to-kmm" },
  ];
  
  var heading = document.createElement("h2");
  heading.textContent = "Ticket Booking Details [Download using below links] :";
  ticketLinks.appendChild(heading);

  // Create hyperlinks dynamically and append to the container
  links.forEach((link) => {
    var anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.textContent = link.name;
    anchor.target = "_blank"; // Open links in a new tab
    ticketLinks.appendChild(anchor);
    ticketLinks.appendChild(document.createElement("br")); // Add line breaks between links
  });

  var rightPane = document.querySelector(".right-pane");
  rightPane.classList.add("show-details");
}


function showHotelLinks() {
  clearRightPane();
  var hotelLinks = document.getElementById("hotelLinks");
  var links = [
    { name: "Vishakapatanam Hotel Booking Details", url: "https://example.com/kmm-to-vskp" },
    { name: "Araku Hotel Booking Details", url: "https://example.com/vskp-to-arku" },
  ];
  
  var heading = document.createElement("h2");
  heading.textContent = "Hotel Booking Details [Download using below links] :";
  hotelLinks.appendChild(heading);

  // Create hyperlinks dynamically and append to the container
  links.forEach((link) => {
    var anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.textContent = link.name;
    anchor.target = "_blank"; // Open links in a new tab
    hotelLinks.appendChild(anchor);
    hotelLinks.appendChild(document.createElement("br")); // Add line breaks between links
  });

  var rightPane = document.querySelector(".right-pane");
  rightPane.classList.add("show-details");
}

function showItineraryLinks() {
  clearRightPane();
  var itineraryLinks = document.getElementById("itineraryLinks");
  var links = [
    { name: "PDF Format", url: "Araku Travel Plan-Not final.pdf" },
    { name: "PPTX Format", url: "Araku_Travel_Plan.pptx" },
  ];
  
  var heading = document.createElement("h2");
  heading.textContent = "Itinerary/Where Abouts[Download using below links] :";
  itineraryLinks.appendChild(heading);

  // Create hyperlinks dynamically and append to the container
  links.forEach((link) => {
    var anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.textContent = link.name;
    anchor.target = "_blank"; // Open links in a new tab
    itineraryLinks.appendChild(anchor);
    itineraryLinks.appendChild(document.createElement("br")); // Add line breaks between links
  });

  var rightPane = document.querySelector(".right-pane");
  rightPane.classList.add("show-details");
}

function clearRightPane() {
  var ticketLinks = document.getElementById("ticketLinks");
  ticketLinks.innerHTML = ""; // Clear the container to hide the details
  ticketLinks.classList.remove("show-details");
  
  var hotelLinks = document.getElementById("hotelLinks");
  hotelLinks.innerHTML = ""; // Clear the container to hide the details
  hotelLinks.classList.remove("show-details");
  
  var itineraryLinks = document.getElementById("itineraryLinks");
  itineraryLinks.innerHTML = ""; // Clear the container to hide the details
  itineraryLinks.classList.remove("show-details");
  
}
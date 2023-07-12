// Dummy data
var data1 = [
  { id: 1, title: "Honda" },
  { id: 2, title: "Audi" },
  { id: 3, title: "Mercedes" }
];

var data2 = [
  { id: 1, title: "Nested Card for Honda" },
  { id: 2, title: "Nested Card for Audi" },
  { id: 3, title: "Nested Card for Mercedes" }
];

// Function to dynamically populate sidebar with cards
function populateSidebar() {
  var sidebarList = document.getElementById("sidebar-list");
  sidebarList.innerHTML = "";

  data1.forEach(function(card) {
    var listItem = document.createElement("li");
    listItem.textContent = card.title;
    listItem.addEventListener("click", function() {
      showNestedCards(card);
    });
    sidebarList.appendChild(listItem);
  });
}

// Function to show nested cards in content area
function showNestedCards(card) {
  var nestedCards = document.getElementById("nested-cards");
  nestedCards.style.display = "block";

  var contentList = document.getElementById("content-list");
  contentList.innerHTML = "";

  data2.forEach(function(nestedCard) {
    var listItem = document.createElement("li");
    listItem.textContent = nestedCard.title;
    contentList.appendChild(listItem);
  });

  // Store selected card data in sessionStorage
  sessionStorage.setItem("selectedCard", JSON.stringify(card));
}

// Function to expand the currently selected card
function expandCard() {
  var selectedCard = sessionStorage.getItem("selectedCard");
  if (selectedCard) {
    var card = JSON.parse(selectedCard);
    // Navigate to the expanded card page (second page)
    window.location.href = "expanded_card.html" + card.id;
  }
}

// Function to populate content area with nested cards
function populateContentArea() {
  var selectedCard = sessionStorage.getItem("selectedCard");
  if (selectedCard) {
    showNestedCards(JSON.parse(selectedCard));
  }
}

// Function to open modal window
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

// Function to close modal window
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// Initialize the page
populateSidebar();
populateContentArea();

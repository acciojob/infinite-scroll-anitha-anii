// Get the <ul> element by its ID
const list = document.getElementById("infi-list");

// Create an array of initial list items
const initialItems = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
];

// Function to add new list items
function addItems() {
  // Add 2 more list items
  for (let i = 0; i < 2; i++) {
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${list.childElementCount + 1}`;
    list.appendChild(newItem);
  }
}

// Function to check if the user has reached the end of the list
function checkScroll() {
  const lastItem = list.lastElementChild;
  const lastItemOffset = lastItem.offsetTop + lastItem.clientHeight;
  const pageOffset = window.pageYOffset + window.innerHeight;

  if (pageOffset > lastItemOffset) {
    addItems();
  }
}

// Add the initial list items to the <ul> element
initialItems.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
});

// Attach the checkScroll function to the scroll event
window.addEventListener("scroll", checkScroll);

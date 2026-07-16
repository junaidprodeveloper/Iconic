window.customElements.define('icon-ic', class extends HTMLElement {});
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchTrigger = document.getElementById("search-trigger");
  const searchContainer = document.getElementById("search-container");

  // Core function to filter cards based on the input text
  const performSearch = () => {
    const query = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const heading = card.querySelector("h1, .car-h1");
      if (heading) {
        const text = heading.textContent.toLowerCase();
        // Show card if it matches the query, otherwise hide it
        card.style.display = text.includes(query) ? "" : "none";
      }
    });
  };

  // 1. Trigger on typing (Live Search)
  searchInput.addEventListener("input", performSearch);

  // 2. Trigger on pressing Enter key
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      performSearch();
    }
  });

  // 3. Trigger on clicking the button (handles expansion toggle + manual search click)
  searchTrigger.addEventListener("click", (e) => {
    e.preventDefault();

    if (!searchContainer.classList.contains("active")) {
      // If closed, expand the bar and focus input
      searchContainer.classList.add("active");
      searchInput.focus();
    } else {
      // If open, perform the search filter
      performSearch();

      // Optional: Collapse back if input is empty on click
      if (searchInput.value.trim() === "") {
        searchContainer.classList.remove("active");
      }
    }
  });

  // Optional: Collapse search bar if clicking completely outside of it when empty
  document.addEventListener("click", (e) => {
    if (!searchContainer.contains(e.target) && searchInput.value.trim() === "") {
      searchContainer.classList.remove("active");
    }
  });
});

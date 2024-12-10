

const themeToggleButton = document.getElementById("checkbox");

const body = document.body;

// Check and apply saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

themeToggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  // Save theme preference to localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});


// checkbox save to local storage
    // Function to save the checkbox state to localStorage
    function saveState(event) {
      const checkbox = event.target;
      const day = checkbox.dataset.day;
      const checked = checkbox.checked;
      // Save state to localStorage
      localStorage.setItem(`day-${day}`, checked);
    }

    // Function to restore checkbox states on page load
    function restoreState() {
      const checkboxes = document.querySelectorAll('.days input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        const day = checkbox.dataset.day;
        const savedState = localStorage.getItem(`day-${day}`);
        if (savedState === 'true') {
          checkbox.checked = true;
        }
      });
    }

    // Add event listener to all checkboxes
    document.querySelectorAll('.days input[type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', saveState);
    });

    // Restore states on page load
    window.addEventListener('DOMContentLoaded', restoreState);
// Function to show the search modal and focus on the search input
function showSearchModal() {
    var searchModal = document.getElementById('search-modal');
    searchModal.classList.remove('hidden');

    var searchInput = document.getElementById('search-query');
    searchInput.focus();
}

// Function to hide the search modal
function hideSearchModal() {
    var searchModal = document.getElementById('search-modal');
    searchModal.classList.add('hidden');
}

// Event listener for the search button click
document.getElementById('search-button').addEventListener('click', function () {
    showSearchModal();
});

// Event listener for the close button click
document.getElementById('close-search-button').addEventListener('click', function () {
    hideSearchModal();
});

// Event listener for "/" key press
document.addEventListener('keydown', function (event) {
    if (event.key === '/' && !event.ctrlKey && !event.altKey && !event.metaKey) {
        event.preventDefault(); // Prevent the '/' character from being typed in the search box
        showSearchModal();
    }
});

// Event listener for "Escape" key press
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        hideSearchModal();
    }
});
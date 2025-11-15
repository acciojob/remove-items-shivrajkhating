//your JS code here. If required.
// Select the button and dropdown
const removeBtn = document.querySelector('input[type="button"]');
const colorSelect = document.getElementById('colorSelect');

removeBtn.addEventListener('click', () => {
  // Get the selected index
  const selectedIndex = colorSelect.selectedIndex;

  // If a valid option is selected, remove it
  if (selectedIndex !== -1) {
    colorSelect.remove(selectedIndex);
  }
});

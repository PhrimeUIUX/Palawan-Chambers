document.addEventListener('DOMContentLoaded', function() {
  // Select all elements with the class 'area-city'
  const cityElements = document.querySelectorAll('.area-city');

  // Add a click event listener to each city element
  cityElements.forEach(function(city) {
    city.addEventListener('click', function() {
      // 1. **DEACTIVATE ALL:** Remove the active-city class from all elements
      cityElements.forEach(function(el) {
        el.classList.remove('active-city');
      });

      // 2. **ACTIVATE ONE:** Add the active-city class to the clicked element (this)
      this.classList.add('active-city');
      
      // Optional: Log the ID of the active city
      console.log('Active City ID:', this.id);
    });
  });
});
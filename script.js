document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    // Select all dropdown toggle buttons
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
    // Add click event listener to each dropdown toggle button
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener('click', function () {
        // Find the closest dropdown container
        const dropdown = this.closest('.dropdown');
  
        // If the clicked dropdown is not already active, close all dropdowns
        const allDropdowns = document.querySelectorAll('.dropdown');
        allDropdowns.forEach((item) => {
          if (item !== dropdown) {
            item.classList.remove('active');  // Close other dropdowns
          }
        });
  
        // Toggle the "active" class for the clicked dropdown
        dropdown.classList.toggle('active');

            // Set max-height for smooth transition based on content height
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    if (dropdown.classList.contains('active')) {
      dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
    } else {
      dropdownContent.style.maxHeight = null;
    }
      });
    });
  });

  


//   document.addEventListener("DOMContentLoaded", function() {
//     let currentIndex = 0;
//     const testimonials = document.querySelectorAll('.testimonial-card');
//     const totalTestimonials = testimonials.length;
  
//     // Set initial position
//     const updateSlider = () => {
//       // Reset all card positions
//       testimonials.forEach((card, index) => {
//         card.style.transform = `translateX(-${currentIndex * 100}%)`;
//       });
//     };
  
//     // Next Button
//     document.querySelector('.next-btn').addEventListener('click', () => {
//       currentIndex = (currentIndex + 1) % totalTestimonials; // Loop back to first
//       updateSlider();
//     });
  
//     // Previous Button
//     document.querySelector('.prev-btn').addEventListener('click', () => {
//       currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials; // Loop back to last
//       updateSlider();
//     });
  
//     // Initial update
//     updateSlider();
//   });


let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
  

// JavaScript to show the contact card on scroll
document.addEventListener('DOMContentLoaded', function () {
    const contactCard = document.querySelector('.contact-card');
  
    // Function to check if element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Show contact card when scrolled into view
    function handleScroll() {
      if (isInViewport(contactCard)) {
        contactCard.classList.add('visible');
        window.removeEventListener('scroll', handleScroll); // Only trigger once
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  });
  



  const form = document.getElementById('appointment-form'); // Assuming you have an ID for your form

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    // Collect form data
    const patientName = document.getElementById('patientName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = document.querySelector('textarea[name="message"]').value;
  
    // Send data to backend using fetch
    try {
      const response = await fetch('http://localhost:5001/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          patientName,
          email,
          phone,
          date,
          time,
          message
        }),
      });
  
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  });
  
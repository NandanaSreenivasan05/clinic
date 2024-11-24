const form = document.getElementById('appointment-form'); // Assuming you have an ID for your form
console.log("Form submitted");
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log("form submitted")

  // Collect form data
  const patientName = document.getElementById('patientName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const message = document.getElementById('message').value;

  var selected= document.querySelector('input[type=radio][name=gender]:checked');
  const gender = selected.value;
 console.log("Gender selected:", gender);  // Log the selected gender value

  // Send data to backend using fetch
  try {
    const response = await fetch('http://localhost:5001/api/appointments', {
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
        message,
        gender
      }),
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error:', error);
  }
});

// Get the form element
const form = document.getElementById('educationForm');
const message = document.getElementById('message');

// Listen for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const firstName = document.getElementById('fname').value.trim();
    const lastName = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const education = document.getElementById('dropdown').value.trim();
    const instution = document.getElementById('institution').value.trim();
    const gender = document.getElementById('gender').value.trim();
    const interest = document.getElementById('interest').value.trim();
    const comments = document.getElementById('additional-comments').value.trim();

    if (!firstName || !lastName || !email || !education || !instution || !gender) {
        message.textContent = 'Please fill in all required fields.';
        message.style.color = 'red';
        return;
    }

    message.innerHTML = `
    <p style="color: green;">Form submitted successfully!</p>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Education Level:</strong> ${education}</p>
    <p><strong>Institution:</strong> ${institution}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Interests:</strong> ${interests.join(', ') || 'None'}</p>
    <p><strong>Comments:</strong> ${comments || 'None'}</p>`;

    // Optionally, reset the form
    form.reset();
});





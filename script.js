// Mobile Number Verification Process
function verifyMobile() {
    const mobileInput = document.getElementById('mobile-number').value.trim();
    const errorMsg = document.getElementById('error-msg');

    // Clean any empty spaces
    const cleanNumber = mobileInput.replace(/\s/g, '');
    const isNumber = /^\d+$/.test(cleanNumber);
    
    // Check for valid digit count
    if (cleanNumber.length >= 9 && isNumber) {
        errorMsg.style.display = 'none';
        document.getElementById('login-step').style.display = 'none';
        
        const bookingStep = document.getElementById('booking-step');
        bookingStep.style.display = 'block';
    } else {
        errorMsg.style.display = 'block';
    }
}

// Handle Direct Offline Appointment Confirmation
function submitAppointment() {
    const name = document.getElementById('patient-name').value.trim();
    const type = document.getElementById('appointment-type').value;
    const date = document.getElementById('appointment-date').value;

    if (name === "" || type === "" || date === "") {
        alert("Please complete all patient information fields before confirming.");
        return;
    }

    let categoryText = "";
    if (type === "wound") {
        categoryText = "Specialized Wound Care (තුවාල සඳහා)";
    } else if (type === "surgery") {
        categoryText = "Minor Surgery (සුළු සැත්කම්)";
    } else {
        categoryText = "General Medicine (සාමාන්‍ය ප්‍රතිකාර)";
    }

    // Success notification box text
    alert(`Appointment Booking Confirmed!\n\nPatient Name: ${name}\nPractitioner: Dr. Amarasiri Wickramarachchi\nCategory: ${categoryText}\nScheduled Date: ${date}\n\nImportant: Your slot is successfully held. No online prepayment is required. Please pay at the pharmacy counter upon arrival.`);

    // Resetting form components
    document.getElementById('booking-form').reset();
    document.getElementById('booking-step').style.display = 'none';
    document.getElementById('login-step').style.display = 'block';
    document.getElementById('mobile-number').value = '';
}
// Function to generate a random text-based CAPTCHA
function generateCaptcha() {
    const captchaLength = 6; // Adjust the length of the CAPTCHA text
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
  
    for (let i = 0; i < captchaLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      captcha += chars[randomIndex];
    }
  
    return captcha;
  }
  
  // Function to initialize the CAPTCHA on page load
  function initCaptcha() {
    const captchaText = document.getElementById('captchaText');
    const captchaInput = document.getElementById('captchaInput');
  
    const captcha = generateCaptcha();
    captchaText.textContent = captcha;
    captchaInput.value = '';
  }
  
  // Function to validate the CAPTCHA on form submission
  function validateCaptcha(event) {
    event.preventDefault();
  
    const captchaText = document.getElementById('captchaText');
    const captchaInput = document.getElementById('captchaInput');
  
    if (captchaText.textContent === captchaInput.value) {
      alert('CAPTCHA successfully validated!'); // Replace this with your desired action on successful CAPTCHA validation
      initCaptcha(); // Reset CAPTCHA for the next attempt
    } else {
      alert('Invalid CAPTCHA, please try again.'); // Replace this with your desired action on failed CAPTCHA validation
      initCaptcha(); // Reset CAPTCHA for the next attempt
    }
  }
  
  // Initialize CAPTCHA on page load
  initCaptcha();
  
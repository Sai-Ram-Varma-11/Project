document.addEventListener("DOMContentLoaded", function() {
    console.log("Document is ready.");
    
   
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (name === "" || email === "" || message === "") {
                alert('Please fill in all fields.');
                return;
            }


            alert('Your message has been sent!');
            window.location.href = 'thank-you.html';
        });
    }
});

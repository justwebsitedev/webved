// Main JavaScript file

// Example: simple button click alert
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Button clicked!');
        });
    });
});
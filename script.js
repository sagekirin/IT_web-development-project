const pet = document.getElementById('pet');

let petPosition = { x: 0, y: window.innerHeight - 50 }; // Initial position

// track the mouse movement
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;

    // Little guy follows mouse
    pet.style.transform = `translate(${mouseX - pet.offsetWidth / 2}px, ${petPosition.y}px)`;

    // Update the Gintoki's position
    petPosition.x = mouseX;
});

// Gin jumps on click, then moves to OG position
pet.addEventListener('click', () => {
    pet.style.transform = `translate(${petPosition.x}px, ${petPosition.y - 100}px)`;
    setTimeout(() => {
        pet.style.transition = 'transform 0.3s ease-out'; //Fast jump anim
        pet.style.transform = `translate(${petPosition.x}px, ${petPosition.y}px)`;
    }, 300);

    // Reset the transition back to slow for the next mouse movement
    setTimeout(() => {
        pet.style.transition = 'transform 2s ease-out';
    }, 300);
});

// Pick up and drop Gin to his doom
let isDragging = false;
let offsetX = 0; // To store the initial mouse offset
let offsetY = 0;

// Update the Gin's position based on the mouse movement
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Move Gintoki based on mouse position
        pet.style.transform = `translate(${mouseX - offsetX}px, ${mouseY - offsetY}px)`;
    }
});

// Grab Detection
pet.addEventListener('mousedown', (e) => {
    isDragging = true;

    // Get the mouse offset when clicking on the pet
    offsetX = e.clientX - pet.getBoundingClientRect().left; // Horizontal
    offsetY = e.clientY - pet.getBoundingClientRect().top;  // Vertical

    pet.style.transition = 'none';
});

// Detect when you let go of Gin (how could you?)
document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false; // Stop dragging
        pet.style.transition = 'transform 1s ease-out';
    }
});
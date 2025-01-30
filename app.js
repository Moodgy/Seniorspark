// Function to scroll to the services section
function showServices() {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}

// Add event listener for mousemove to adjust button color dynamically
const button = document.querySelector('button');

// Store the original color to revert back when the cursor leaves
const originalColor = '#ff66b2';  // Original pink color

button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const cursorX = e.clientX - rect.left; // Get cursor's X position relative to the button
    const buttonWidth = rect.width;

    // Calculate the ratio of the cursor's position
    const ratio = cursorX / buttonWidth;

    // Calculate a darker pink on the left side and a lighter pink on the right
    // Ensuring we stay within the pink range
    const leftColor = `rgb(${255 - Math.round(100 * ratio)}, 102, ${178 - Math.round(40 * ratio)})`; 

    // Change the button color dynamically based on cursor position
    button.style.backgroundColor = leftColor;
});

// When the cursor leaves the button, revert to the original color
button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = originalColor;
});

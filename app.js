// Function to scroll to the services section
function showServices() {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}

// Add event listener for mousemove to adjust button color dynamically
const buttons = document.querySelectorAll('button');

// Store the original color and the glow effect color to revert back when the cursor leaves
const originalColor = '#fd0983';  // Original pink color

buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const cursorX = e.clientX - rect.left; // Get cursor's X position relative to the button
        const buttonWidth = rect.width;

        // Calculate the ratio of the cursor's position
        const ratio = cursorX / buttonWidth;

        // Add the glow effect dynamically
        button.style.boxShadow = `0 0 20px rgba(253, 9, 131, 0.8)`;  // Adding glow on hover

        // The button color stays the same
        button.style.backgroundColor = originalColor;
    });

    // When the cursor leaves the button, revert to the original color and reset the glow effect
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = originalColor;
        button.style.boxShadow = ''; // Remove the glow effect
    });
});

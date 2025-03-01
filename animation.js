// Matrix rain effect
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters to display
const chars = 'FUCKYOURMOM0123456789<>/\\|{}[]!@#$%^&*()_+-=';

// Font properties
const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);

// Initialize drops array
const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
}

// Draw the matrix rain
function draw() {
    // Add semi-transparent black rectangle to create fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set text color and font
    ctx.fillStyle = '#0f0';
    ctx.font = `${fontSize}px monospace`;

    // Loop through each drop
    for (let i = 0; i < drops.length; i++) {
        // Get random character
        const char = chars.charAt(Math.floor(Math.random() * chars.length));

        // Draw character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Reset drop if it reaches bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
    }
}

// Set interval to animate
setInterval(draw, 35);

// Resize canvas when window is resized
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Recalculate columns
    const columns = Math.floor(canvas.width / fontSize);

    // Reset drops array
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
    }
});
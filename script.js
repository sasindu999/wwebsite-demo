// Simulated live updates for security threats
const threats = [
    "New zero-day vulnerability discovered in popular CMS",
    "Cryptocurrency exchange suffers major data breach",
    "State-sponsored hacking group targets healthcare sector",
    "Critical security flaw found in widely-used networking protocol",
    "AI-powered malware evades traditional antivirus detection"
];

function updateThreats() {
    const threatsList = document.getElementById('threats-list');
    threatsList.innerHTML = '';
    const shuffled = threats.sort(() => 0.5 - Math.random());
    shuffled.slice(0, 3).forEach(threat => {
        const li = document.createElement('li');
        li.textContent = threat;
        threatsList.appendChild(li);
    });
}

setInterval(updateThreats, 10000); // Update every 10 seconds

// Simple animation for the threat map
gsap.to("#threat-map", {
    backgroundColor: "#1a202c",
    duration: 2,
    repeat: -1,
    yoyo: true
});

// Hover effect for navigation items
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, {color: "#4ade80", duration: 0.3});
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(link, {color: "#f3f4f6", duration: 0.3});
    });
});

// Add any additional JavaScript functionality here
document.getElementById("revealButton").addEventListener("click", function() {
    document.getElementById("messageContainer").style.display = "block";
    this.style.display = "none"; // Hide button after clicking

    // Start Falling Hearts & Roses
    startFalling();

    // Start Typing Effect
    startTyping();

    // Play Background Music
    document.getElementById("bgMusic").play();
});

function startFalling() {
    const outsideContainer = document.getElementById("falling-container");
    const insideContainer = document.getElementById("falling-inside");

    setInterval(() => {
        createFallingElement(outsideContainer);
        createFallingElement(insideContainer);
    }, 300);
}

function createFallingElement(container) {
    const element = document.createElement("div");
    element.classList.add("falling");

    // Randomly choose a heart or a rose
    element.innerHTML = Math.random() > 0.5 ? "❤️" : "🌹";

    // Random position and animation duration
    element.style.left = Math.random() * 100 + "vw";
    element.style.animationDuration = (Math.random() * 2 + 3) + "s"; // 3s - 5s

    container.appendChild(element);

    // Remove element after animation
    setTimeout(() => {
        element.remove();
    }, 5000);
}

function startTyping() {
    const message = document.getElementById("message");
    const text = `Hey Mama,

Happy Valentine's Day!❤️🌹 I just wanted to take a moment to tell you how special you are to me. Over time, our bond has grown deeper, 
and I truly cherish every moment we spend together. You're not just my cousin, but also my best friend.🥰😘

Lately, I’ve been feeling something more than just friendship, and I don’t know if you’ve ever felt the same way. 
I really value our bond,and I would never want to make things awkward between us.
But I believe love is beyond definitions and boundaries, and I wanted to be honest about my feelings.

No matter what, you and our friendship will always be important to me. I just wanted to share my heart with you. 
Take your time, and no matter what you feel, I respect and appreciate you always. ❤️

With love,  
Suman🤌`;

    let index = 0;
    function typeLetter() {
        if (index < text.length) {
            message.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeLetter, 135); // Typing speed
        } else {
            message.style.borderRight = "none"; // Remove blinking cursor
            showMoreLink(); // Show "Click here for more" after typing ends
        }
    }

    typeLetter();
}

// Function to show "Click here for more" link
function showMoreLink() {
    const moreLink = document.createElement("p");
    moreLink.innerHTML = `<a href="https://will-you-b-my-valentine.vercel.app/" target="_blank" class="more-link">❤️ Click here for One Surprise ❤️</a>`;
    document.getElementById("messageContainer").appendChild(moreLink);
}


    document.addEventListener("DOMContentLoaded", () => {
        const words = ["Frontend Developer", "UI/UX Designer", "Creative Problem-Solver"];
        let wordIndex = 0;
        let letterIndex = 0;
        const textElement = document.getElementById("dynamic-text");

        function typeWord() {
            if (letterIndex < words[wordIndex].length) {
                textElement.textContent += words[wordIndex][letterIndex]; // 🔥 Adds one letter at a time
                letterIndex++;
                setTimeout(typeWord, 120); // ⏳ Adjust speed (120ms per letter)
            } else {
                setTimeout(() => {
                    textElement.textContent = ""; // 🔄 Clear for next word
                    letterIndex = 0;
                    wordIndex = (wordIndex + 1) % words.length;
                    typeWord(); // 🔄 Start new word animation
                }, 2000); // ⏳ Pause before switching
            }
        }

        typeWord(); // ✅ Start animation instantly
    });

    document.querySelector("#contact form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page refresh

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

    if (name && email && message) {
        alert("Message sent successfully! 🚀"); // Basic confirmation
    } else {
        alert("Please fill out all fields."); // Ensures all inputs are filled
    }
});


  function toggleReadMore() {
    let shortText = document.getElementById("shortText");
    let fullText = document.getElementById("fullText");
    let button = document.getElementById("readMoreBtn");

    if (fullText.style.display === "none") {
        fullText.style.display = "block";
        button.innerText = "Read Less";
    } else {
        fullText.style.display = "none";
        button.innerText = "Read More";
    }
}
 

    function toggleBio(bioId) {
        let bio = document.getElementById(bioId);
        if (bio.style.display === "block") {
            bio.style.opacity = "0";
            setTimeout(() => { bio.style.display = "none"; }, 300);
        } else {
            bio.style.display = "block";
            setTimeout(() => { bio.style.opacity = "1"; }, 50);
        }
    }



  

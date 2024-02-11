// // Get the first button
// const noButton = document.getElementById('noButton');

// // Add event listener for the first button
// noButton.addEventListener('click', function() {
//     // Show the container with the hidden button
//     document.getElementById('hiddenButtonContainer').style.display = 'block';
// });

// // Get the second button
// const secondButton = document.getElementById('secondButton');

// // Add event listener for the second button
// secondButton.addEventListener('click', function() {
//     // Do something when the second button is clicked
//     alert('Second button clicked!');
// });


// Messages array
const messages = [
    "Wow!! You Just Made My Day ♥️, So Let's Meet 🥰",
    "You're Amazing! Let's Hang Out Soon! 😊",
    "I'm So Excited to See You! 🎉",
    "Can't Wait to Spend Time Together! 💖"
];

const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];


let messageIndex = 0; // Index to track the current message

let clickCount = 0; // Initialize counter

// Function to handle first button click
function handleNoButtonClick() {
    // Increment click count
    clickCount++;

    // Update the text of the first button
    if(clickCount == 1){
        document.getElementById('noButton').innerText = "Seriously? 🥹";
    }
    else if(clickCount == 2){
        document.getElementById('noButton').innerText = "Are you sure? 🙁";
    }
    else if(clickCount == 3){
        document.getElementById('noButton').innerText = "Think about it again! 🫠";
    }
    else if(clickCount == 4){
        document.getElementById('noButton').innerText = "take your time then reply 😥";
    }
    else if(clickCount == 5){
        document.getElementById('noButton').innerText = "still no? 😶";
    }
    else if(clickCount == 6){
        document.getElementById('noButton').innerText = "you are hurting me a little 😐";
    }
    else if(clickCount == 7){
        document.getElementById('noButton').innerText = "is this your final decision? 🙃";
    }
    else if(clickCount == 8){
        document.getElementById('noButton').innerText = "sure, your final decision? 😞";
    }
    else if(clickCount == 9){
        document.getElementById('noButton').innerText = "feeling sad but okay!! ☹️";
    }
    else if(clickCount == 10){
        document.getElementById('noButton').innerText = "Okay i'll accept your decision 🥴";
        yesButton.style.display = 'none';
    }

    // If click count reaches 10, remove the event listener
    if (clickCount === 11) {
        alert('Okay Bye then!! I wish you have a wonderful future 🫶');
        document.getElementById('noButton').innerText = "Okay it's NOOOO....";
        document.getElementById('noButton').removeEventListener('click', handleNoButtonClick);
        
    }
}
function handleYesButtonClick() {
    // Hide the "No" button
    noButton.style.display = 'none';

    // Enlarge the text of the "Yes" button
    yesButton.style.fontSize = '100px';

    // Define the animation properties
    const animationName = 'example'; // Name of your animation
    const animationDuration = '2s'; // Duration of your animation
    const animationTimingFunction = 'ease'; // Timing function of your animation
    const animationIterationCount = 'infinite'; // Iteration count of your animation 

    // Set the animation style
    yesButton.style.animation = `${animationName} ${animationDuration} ${animationTimingFunction} ${animationIterationCount}`;

    // Display messages one by one at 2-second intervals
    setInterval(() => {
        // Get the message element
        const messageElement = document.getElementById('yesButton');

        // Set the text of the message
        messageElement.innerText = messages[messageIndex];

        // Increment the message index
        messageIndex++;

        // Reset message index if it exceeds the length of the messages array
        if (messageIndex >= messages.length) {
            messageIndex = 0;
        }
    }, 2000);

    // Display colors one by one at 1-second intervals
    setInterval(() => {
        // Change the color of the element
        yesButton.style.color = colors[colorIndex];

        // Increment the color index
        colorIndex++;

        // Reset the color index if it exceeds the length of the colors array
        if (colorIndex >= colors.length) {
            colorIndex = 0;
        }
    }, 1000);
}



// Get the No button
const noButton = document.getElementById('noButton');

// Get the Yes button
const yesButton = document.getElementById('yesButton');

// Get the GIF
// const gif = document.getElementById('gif');


// Add event listener for the No button
noButton.addEventListener('click', handleNoButtonClick);
yesButton.addEventListener('click', handleYesButtonClick);





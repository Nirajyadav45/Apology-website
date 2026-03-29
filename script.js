

// Function to hide all sections
function hideAllSections() {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
      section.style.display = 'none';
    });
  }
  
  // Function to show the timeline section
  function showTimeline() {
    hideAllSections();
    document.getElementById('timeline-section').style.display = 'block';
  }
  
  // Function to show the apology section
  function showApology() {
    hideAllSections();
    document.getElementById('apology-section').style.display = 'block';
  }
  
  // Function to show the letter section
  // function showLetter() {
  //   hideAllSections();
  //   document.getElementById('letter-section').style.display = 'block';
  //   createFallingHearts(); // Create falling hearts when the "Letter from the Heart" section is displayed
  // }
  
  
  
  // Function to create falling hearts
  // function createFallingHearts() {
  //     // Get the container within the 'Letter from the Heart' section
  //     var heartContainer = document.getElementById('letter-section');
  
  //     for (var i = 0; i < 20; i++) {
  //         var heart = document.createElement('div');
  //         heart.className = 'falling-heart';
  //         heart.style.left = Math.random() * window.innerWidth + 'px';
  //         heart.style.animationDuration = Math.random() * 2 + 3 + 's';
  //         heartContainer.appendChild(heart);
  
  //         // Remove the heart from the DOM after the animation completes
  //         heart.addEventListener('animationend', function () {
  //             this.remove();
  //         });
  //     }
  // }
  
  // Function to create falling hearts
 // Function to show the letter section
function showLetter() {
  hideAllSections();
  const letterSection = document.getElementById('letter-section');
  letterSection.style.display = 'block';

  // Trigger yellow sparkles/flowers instead of hearts
  createFallingEmojis(); 
}

// Function to create falling flowers/sparkles (Replaces Hearts)
function createFallingEmojis() {
  var container = document.getElementById('letter-section');
  container.style.position = 'relative';
  
  // We use yellow-themed emojis to match the new vibe
  const emojis = ['💐', '✨', '🌼', '💛'];

  for (var i = 0; i < 20; i++) {
    var emoji = document.createElement('div');
    emoji.className = 'falling-emoji'; // Change class name in CSS too
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    emoji.style.left = Math.random() * window.innerWidth + 'px';
    emoji.style.position = 'absolute';
    emoji.style.top = '-20px';
    emoji.style.fontSize = '24px';
    emoji.style.animation = `fall ${Math.random() * 2 + 3}s linear forwards`;
    
    container.appendChild(emoji);

    emoji.addEventListener('animationend', function() {
      this.remove();
    });
  }
}
  
  
  
  
  // Function to show the letter section
document.getElementById('letter-link').addEventListener('click', function(e) {
  e.preventDefault(); // Prevents page jump
  showLetter(); 
});
  
  
  // Call showTimeline when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    hideAllSections(); // Hide all sections on page load
  });
  
  // Event listeners for navigation links
  document.getElementById('timeline-link').addEventListener('click', showTimeline);
  document.getElementById('apology-link').addEventListener('click', showApology);
  document.getElementById('letter-link').addEventListener('click', showLetter);
  
  
  // Heart section
  document.getElementById('acceptButton').addEventListener('click', function() {
    fixHeart();
  });
  
  // Function to fix the heart and show small hearts
  function fixHeart() {
    // Get the heart container
    var heartContainer = document.getElementById('heart-container');
  
    // Hide the broken heart
    document.getElementById('broken-heart').style.display = 'none';
  
    // Show the fixed heart
    document.getElementById('fixed-heart').style.display = 'block';
  
    // Create small hearts and add them to the container
    createSmallHearts();
  
    // Disable the button after accepting the apology
    document.getElementById('acceptButton').disabled = true;
  }
  
  function createSmallHearts() {
    var smallHeartsContainer = document.getElementById('small-hearts-container');
    for (var i = 0; i < 20; i++) {
      var smallHeart = document.createElement('div');
      smallHeart.className = 'small-heart';
      smallHeartsContainer.appendChild(smallHeart);
      animateSmallHeart(smallHeart);
    }
  }
  
  function animateSmallHeart(smallHeart) {
    var animationDuration = Math.random() * 2 + 4;
    var startPositionX = Math.random() * 100;
    smallHeart.style.animation = `rise ${animationDuration}s linear`;
    smallHeart.style.left = `${startPositionX}vw`;
    setTimeout(function() {
      smallHeart.remove();
    }, animationDuration * 1000);
  }
  
  
  // for muisic
  
  
  function playAudio() {
    const audioControls = document.getElementById('audio-controls');
    audioControls.classList.add('active');
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play();
  }
  function toggleAudio() {
    const backgroundMusic = document.getElementById('backgroundMusic');
  
    if (backgroundMusic.paused) {
      backgroundMusic.play();
    } else {
      backgroundMusic.pause();
    }
  }
  
  
  // for video
  
  // script.js
  
  var videoContainer = document.getElementById("video-container");
  var video = document.getElementById("myVideo");
  var playPauseBtn = document.getElementById("playPauseBtn");
  
  function togglePlayPause() {
    if (video.paused) {
      video.play();
      playPauseBtn.innerHTML = "Pause";
    } else {
      video.pause();
      playPauseBtn.innerHTML = "Play";
    }
  }
  
  function showVideo() {
    hideAllSections();
    videoContainer.style.display = "block";
  }
  
  function hideAllSections() {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
      section.style.display = 'none';
    });
  }
  
  
  function acceptApology() {
    const btn = document.getElementById('acceptButton');
    const display = document.getElementById('emoji-display');
    const responseCard = document.getElementById('tillu-response');
    
    // 1. Change the mood
    display.innerText = "😎✨"; 
    
    // 2. Hide the button and show the reply
    btn.style.display = 'none';
    responseCard.style.display = 'block';
    
    // 3. Trigger a little surprise alert
    setTimeout(() => {
        alert("The Grumpiness Meter has reached 0%. Peace has been restored to the universe.");
    }, 500);
}

document.getElementById('letter-link').addEventListener('click', function(e) {
    e.preventDefault();
    hideAll(); // Your function that hides other sections
    document.getElementById('letter-section').style.display = 'block';
    
    // Trigger the yellow flower/sparkle effect we built earlier
    if(typeof createFallingEmojis === "function") {
        createFallingEmojis(); 
    }
});

function showVideo() {
    hideAllSections();
    const videoSec = document.getElementById('video-section');
    videoSec.style.display = 'block';
    
    // Optional: Add a playful alert before they click
    setTimeout(() => {
        alert("Warning: This video contains 100% accurate footage of our daily interactions. Proceed with caution!");
    }, 300);
}

// Ensure your hideAllSections function includes the video-section
function hideAllSections() {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
}
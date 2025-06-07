let timer;
let isRunning = false;
let timeLeft = 25 * 60; // 25 minutes in seconds

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateDisplay() {
    document.getElementById('timer').textContent = formatTime(timeLeft);
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        const zenMessage = document.getElementById("startMessage");
        zenMessage.classList.remove("hidden");
        setTimeout(() => {
          zenMessage.classList.add("show");
      }, 100);
      setTimeout(() => {
        zenMessage.classList.remove("show");
        zenMessage.classList.add("hidden");
    }, 5100);
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                alert ("Goed gewerkt ratje")
                triggerComplimentRain();
                showFlower();
            }
        }, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    const zenMessage = document.getElementById("startMessage");
    zenMessage.classList.remove("show");
    zenMessage.classList.add("hidden");
    timeLeft = 25 * 60;
    updateDisplay();
}

const compliments = [
  "Slimmer dan Kierkegaard",
  "Nietszche zou trots zijn",
  "Wat een talent",
  "Die essay is bijna zo lekker als jij",
  "Zo een rondje met Haru?",
  "😍😍",
  "Weer een cycli voltooid in deze lineaire wereld",
  "Stukje chocolade??"
];

function triggerComplimentRain() {
    const container = document.getElementById("complimentContainer");
  
    for (let i = 0; i < 30; i++) {
      const span = document.createElement("span");
      span.className = "compliment";
      span.textContent = compliments[Math.floor(Math.random() * compliments.length)];
  
      span.style.left = `${Math.random() * 100}vw`;
  
      span.style.fontSize = `${Math.random() * 10 + 14}px`;
  
      const duration = Math.random() * 2 + 3; // 3s - 5s
      const delay = Math.random() * 2;        // 0s - 2s
      span.style.animationDuration = `${duration}s`;
      span.style.animationDelay = `${delay}s`;
  
      container.appendChild(span);
  
      setTimeout(() => {
        span.classList.add("bounce");
      }, (delay + duration) * 1000);
  
      setTimeout(() => span.remove(), 8000);
    }
  }

  function showFlower() {
    const container = document.getElementById("flowerContainer");
  
    const flower = document.createElement("div");
    flower.className = "flower show";
    flower.textContent = "🌻";
  
    const x = Math.random() * 80;
    const y = Math.random() * 70;
    flower.style.left = `${x}vw`;
    flower.style.top = `${y}vh`;
  
    container.appendChild(flower);
  }
  

  
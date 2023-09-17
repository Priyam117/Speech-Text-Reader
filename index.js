const textInput = document.getElementById('text-input');
const toggleBtn = document.getElementById('toggle-btn');
const startBtn = document.getElementById('start-btn');
const output = document.getElementById('output');
const synth = window.speechSynthesis;
let speaking = false;

const modal = document.getElementById('myModal');
const closeModalBtn = document.getElementById('closeModal');

toggleBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

startBtn.addEventListener('click', () => {
  if (!speaking) {
    const text = textInput.value;
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
      speaking = true;
      utterance.onend = () => {
        speaking = false;
      };
    }
  }
});

const imageContainers = document.querySelectorAll('.image');

imageContainers.forEach((container) => {
  container.addEventListener('click', () => {
    const textToRead = container.getAttribute('data-text');
    if (textToRead) {
      const utterance = new SpeechSynthesisUtterance(textToRead);
      synth.speak(utterance);
    }
  });
});

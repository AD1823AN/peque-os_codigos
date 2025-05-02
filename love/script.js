const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainScreen = document.getElementById('main-screen');
const bryanScreen = document.getElementById('bryan-screen');
const heartsContainer = document.getElementById('hearts-bryan');
const endBtn = document.getElementById('endBtn');

const letters = [
    ['', '', 'T', '', 'E', '', 'A', '', 'M', '', 'O', '', ''],
    ['', '', '', '', '', 'M', '', 'I', '', '', '', '', '', ''],
    ['', '', 'N', '', 'I', '', 'Ñ', '', 'O', '', '💜', '', '']
  ];
  

noBtn.addEventListener('mouseover', () => {
  const i = Math.floor(Math.random() * 300) + 50;
  const j = Math.floor(Math.random() * 300) + 50;
  noBtn.style.position = 'absolute';
  noBtn.style.top = `${i}px`;
  noBtn.style.left = `${j}px`;
});

yesBtn.addEventListener('click', () => {
  mainScreen.classList.add('hidden');
  bryanScreen.classList.remove('hidden');
  showHearts();
});

function showHearts() {
  heartsContainer.innerHTML = '';
  letters.forEach((row) => {
    const rowDiv = document.createElement('div');
    rowDiv.style.display = 'flex';
    rowDiv.style.justifyContent = 'center';
    rowDiv.style.gap = '30px';
    rowDiv.style.marginBottom = '20px';

    row.forEach((letter) => {
      const heart = document.createElement('div');
      heart.className = 'heart-letter';
      if (letter === '') {
        heart.innerHTML = '&nbsp;';
        heart.style.visibility = 'hidden';
      } else {
        heart.innerHTML = `🎈<span class="letter">${letter}</span>`;
        heart.addEventListener('click', () => {
          heart.classList.add('show');
          heart.innerHTML = `<span class="letter">${letter}</span>`;
          makeSparkles(heart);
        });
      }
      rowDiv.appendChild(heart);
    });

    heartsContainer.appendChild(rowDiv);
  });
}

function makeSparkles(element) {
  for (let i = 0; i < 10; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${Math.random() * 30 - 15}px`;
    sparkle.style.top = `${Math.random() * 30 - 15}px`;
    element.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  }
}

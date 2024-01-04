const diceContainer = document.querySelector('.main'); // Changed from 'diceContainer' to 'main'
const resetBtn = document.querySelector('.reset');
const title = document.querySelector('.title');
const playersContainer = document.querySelector('.players-container');

// Display dice for each player
function displayDice(playerNumber) {
  const dicePlayer = document.querySelector(`.dice-player${playerNumber}`);
  const diceNumbers = [];

  // Generate 6 random dice numbers
  for (let i = 0; i < 6; i++) {
    diceNumbers.push(Math.floor(Math.random() * 6) + 1);
  }

  // Display the dice numbers
  dicePlayer.innerHTML = diceNumbers.map((number) => `<div class="dice">${number}</div>`).join('');
}

// Add players based on the input value
function addPlayers() {
  const playerCountInput = document.getElementById('playerCount');
  const playerCount = parseInt(playerCountInput.value);

  if (!isNaN(playerCount) && playerCount > 0) {
    // Clear existing players and dice
    playersContainer.innerHTML = '';
    diceContainer.innerHTML = '';

    // Create new players and display dice for each player
    for (let i = 1; i <= playerCount; i++) {
      createPlayer(i);
      displayDice(i);
    }
  } else {
    alert('Please enter a valid number of players.');
  }
}

// Create a player with a unique ID
function createPlayer(playerNumber) {
  const playerDiv = document.createElement('div');
  playerDiv.classList.add('player');
  playerDiv.innerHTML = `
        <h5>Player ${playerNumber} <span class="counter counter${playerNumber}">0</span></h5>
        <div class="dice-player${playerNumber}"></div>
    `;
  playersContainer.appendChild(playerDiv);
}

// Reset the game
function resetGame() {
  title.innerText = 'Dice Game';
  diceContainer.innerHTML = '';
  playersContainer.innerHTML = '';
  addPlayers(); // Reinitialize with default players
}

// app.js
const diceCountSelect = document.getElementById('dice-count');
const rollButton = document.getElementById('roll-button');
const diceResultsContainer = document.getElementById('dice-results');

// Enable dice count selection once player names are entered
// (You can implement this logic based on your game flow)
document.addEventListener('DOMContentLoaded', () => {
  // For now, let's enable the dice count and roll button when the page loads
  diceCountSelect.disabled = false;
  rollButton.disabled = false;

  // Populate dice count options
  for (let i = 1; i <= 5; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    diceCountSelect.appendChild(option);
  }
});

rollButton.addEventListener('click', () => {
  const selectedDiceCount = diceCountSelect.value;
  const diceResults = rollDice(selectedDiceCount);
  displayDiceResults(diceResults);
});

function rollDice(diceCount) {
  // Simulate rolling the specified number of dice
  return Array.from({ length: diceCount }, () => Math.floor(Math.random() * 6) + 1);
}

function displayDiceResults(results) {
  // Clear previous results
  diceResultsContainer.innerHTML = '';

  // Display the results
  results.forEach(result => {
    const resultElement = document.createElement('div');
    resultElement.textContent = `Dice: ${result}`;
    diceResultsContainer.appendChild(resultElement);
  });

  // Show the dice results container
  diceResultsContainer.classList.remove('hidden');
}

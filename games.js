function startGame()
{
    // Prompt user to enter a either rock, paper or scissors
    userChoice = prompt("Choose Rock, Paper or Scissors");

    // If user enters something
    if (userChoice)
    {
        // Lowercase to eliminate case mismatch
        userChoice = userChoice.toLowerCase();
        choices = ["rock", "paper", "scissors"];

        // Get the div content to write content to
        game = document.getElementById("game");

        // If user chose a correct choice
        if (choices.includes(userChoice))
        {
            // Choose a random choice for computer
            compChoice = choices[Math.floor(Math.random() * 3)];

            // Write to the "game" div what user chose
            userText = document.createElement("h4");
            userText.innerHTML = "You chose: " + userChoice[0].toUpperCase() + userChoice.slice(1);

            // Write to the "game" div what computer chose
            compText = document.createElement("h4");
            compText.innerHTML = "Computer chose: " + compChoice[0].toUpperCase() + compChoice.slice(1);

            // Create an element to write the result
            winText = document.createElement("h4");

            // Append the created elements into the "game" div
            game.appendChild(userText);
            game.appendChild(compText);
            game.appendChild(winText);

            // Compare choices and choose winner
            if (userChoice === compChoice)
            {
                // Assign the result
                winText.innerHTML = "It's a Draw";
            }
            else if (userChoice == choices[0] && compChoice == choices[1])
            {
                winText.innerHTML = "Computer Wins";
            }
            else if (userChoice == choices[0] && compChoice == choices[2])
            {
                winText.innerHTML = "You Win!";
            }
            else if (userChoice == choices[1] && compChoice == choices[0])
            {
                winText.innerHTML = "You Win!";
            }
            else if (userChoice == choices[1] && compChoice == choices[2])
            {
                winText.innerHTML = "Computer Wins";
            }
            else if (userChoice == choices[2] && compChoice == choices[0])
            {
                winText.innerHTML = "Computer Wins";
            }
            else
            {
                winText.innerHTML = "You Win!";
            }
        }
        else
        {
            alert("Wrong input. Please choose from Rock, Paper and Scissors");
        }
    }
}
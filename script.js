const playerForm = document.getElementById("playerNameForm");

playerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  
  const playerFormData = new FormData(playerForm);
  
  const player = playerFormData.get("player_name")

  if (player == "logan")
  {
	  window.location.href = "https://7aa-7.github.io/Rehoboth/Logan.html"
  }
})
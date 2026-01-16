const playerForm = document.getElementById("playerNameForm");

playerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  
  const playerFormData = new FormData(playerForm);
  
  const player = playerFormData.get("player_name")

  if (player == "Logan")
  {
	  window.location.href = "Logan.html"
  }
})
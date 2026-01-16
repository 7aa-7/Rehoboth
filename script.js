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

//Supabase

const subabase = createClient(
	'https://fautgukxaxrqsvyibasy.supabase.co'
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhdXRndWt4YXhycXN2eWliYXN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0MzIwNzIsImV4cCI6MjA4NDAwODA3Mn0.59ZslvggYCgsBHoCB05KQNZSCB8DkjCgGpH4DY1LU2A'
)
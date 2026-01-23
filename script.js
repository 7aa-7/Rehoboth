const playerForm = document.getElementById("playerNameForm");

if (playerForm) {

playerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  
  const playerFormData = new FormData(playerForm);
  
  const player = playerFormData.get("player_name")

  if (player == "Logan")
  {
	  window.location.href = "Logan.html";
  }

  else if (player == "Katie")
  {
	  window.location.href = "Katie.html"
  }

  else if (player == "David")
  {
	  window.location.href = "David.html"
  }

});
}

//Supabase
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(
	'https://fautgukxaxrqsvyibasy.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhdXRndWt4YXhycXN2eWliYXN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0MzIwNzIsImV4cCI6MjA4NDAwODA3Mn0.59ZslvggYCgsBHoCB05KQNZSCB8DkjCgGpH4DY1LU2A'
);

async function loadScores() {

	const katieEl = document.getElementById('KatieScore')
	const davidEl = document.getElementById('DavidScore')


	if (!katieEl || !davidEl) return;

	const { data, error } = await supabase
		.from('scores')
		.select('*')
		.order('player_name');

	if (error) {
		console.error(error);
		return;
	}

	katieEl.textContent = data[1].score;
	davidEl.textContent = data[0].score;
}

window.updateScore = async function (playerName, change)
{
	const { data, error } = await supabase
		.from('scores')
		.select('score')
		.eq('player_name', playerName)
		.single();
		

	if (error)
	{
		console.error(error)
		return;
	}

	const newScore = data.score + change;

	const { error: updateError} = await supabase
		.from('scores')
		.update({ score: newScore })
		.eq('player_name', playerName);

	if (updateError) console.error(updateError);
}



const katieEl = document.getElementById('KatieScore')

if (katieEl) {
supabase
	.channel('scores-live')
	.on(
		'postgres_changes',
		{ event: 'UPDATE', schema: 'public', table: 'scores' },
		loadScores
	)
	.subscribe()

loadScores();
}
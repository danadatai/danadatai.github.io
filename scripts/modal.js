window.onload = function() {

	// Local variables
	var modal, btn, cross;

	// Get the modal, contact button and cross icon
	modal = document.getElementById("area_modal");
	btn = document.getElementById("button_contacts");
	cross = document.getElementsByClassName("modal-close")[0];

	// Open the modal
	btn.onclick = function() {
	  modal.style.display = "block";
	}

	// Close the modal - cross icon
	cross.onclick = function() {
	  modal.style.display = "none";
	}

	// Close the modal - outside window
	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}

}

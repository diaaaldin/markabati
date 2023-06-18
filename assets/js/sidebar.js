document.querySelectorAll("ul.btn-toggle-nav.active-class").forEach((ul) => {
	// assign an on click event for each list
	ul.querySelectorAll("li").forEach((li) => {
		li.onclick = () => {
			console.log(document.querySelector("li input[name='car-color']").value);
			// check if some element is already selected
			if (ul.querySelectorAll("li.active").length > 0)
				ul.querySelector("li.active").classList.remove("active");
			li.classList.add("active");
			// if there is input in the list => return it to restart its value
			const input = ul.querySelector("input[type='text']");
			if (input && input.value != "") {
				input.value = "";
				// show all lists after restarting the input
				ul.querySelectorAll("li").forEach(
					(list) => (list.style.display = "block")
				);
			}
		};
	});

	// the scroll feature and search functionallity
	if (ul.childElementCount > 3) {
		// scroll feature
		ul.style.height = "111px";
		ul.style.overflowY = "scroll";

		// search functionality
		const input = document.createElement("input");
		input.type = "text";
		input.className += "w-100 mb-2 bg-transparent px-2";
		ul.prepend(input);
		const originalLists = Array.from(ul.querySelectorAll("li"));
		input.addEventListener("input", (e) => {
			const value = e.target.value;
			originalLists.forEach((list) => {
				if (list.innerText.includes(value)) list.style.display = "block";
				else list.style.display = "none";
			});
		});
	}
});

document.querySelector(".re-assign").addEventListener("click", (e) => {
	document.querySelectorAll("ul.btn-toggle-nav.active-class").forEach((ul) => {
		console.log(ul);
		ul.querySelectorAll("input").forEach((input) => {
			if (input.type == "radio") {
				console.log(input.checked);
				input.checked = false;
				console.log(input.checked);
			} else {
				console.log(input.value);
				input.value = "";
				console.log(input.value);
			}

			// remove the selected list
			if (ul.querySelector("li.active"))
				ul.querySelector("li.active").classList.remove("active");
		});
	});
});

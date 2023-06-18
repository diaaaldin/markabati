function uploadImage(inputFile, image) {
	const reader = new FileReader();
	reader.addEventListener("load", () => {
		const uploaded_image = reader.result;
		document.querySelector(image).src = uploaded_image;
	});
	reader.readAsDataURL(inputFile.files[0]);
}

document
	.getElementById("cover-image-file")
	.addEventListener("change", (e) =>
		uploadImage(e.target, ".cover-image-wrapper img")
	);

document
	.getElementById("profile-image-file")
	.addEventListener("change", (e) =>
		uploadImage(e.target, ".profile-image-wrapper img")
	);

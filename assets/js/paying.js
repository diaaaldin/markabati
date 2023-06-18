$(document).ready(function () {
	$("select").niceSelect();
});
const nextBtn = document.querySelector(".next-btn");
const backBtn = document.querySelector(".back-btn");
const carsSection = document.querySelector(".cars");
const enterDetailsBtn = document.querySelector(".enter-details-btn");

nextBtn.addEventListener("click", (e) => {
	console.log("helo");
	const currentSection = document.querySelector(".form-steps.active");
	const nextSectionNumber = +currentSection.getAttribute("data-progress") + 1;
	if (nextSectionNumber == 2) {
		backBtn.classList.remove("d-none");
		//  payment process progress
		document.querySelector(
			".progress-bar .bar:first-child .inner-bar"
		).style.backgroundColor = "#24ff00";
		document.querySelector(
			".progress-bar .bar:nth-child(2) span.dot"
		).style.backgroundColor = "#24ff00";
	}
	if (nextSectionNumber == 3) {
		// check fields
		const fieldsOfSecondSection = [
			...Array.from(currentSection.querySelectorAll("input")),
			...Array.from(currentSection.querySelectorAll("select")),
		];
		let isEmpty = false;
		for (let i = 0; i < fieldsOfSecondSection.length; ++i) {
			if (fieldsOfSecondSection[i].value.trim() == "") {
				isEmpty = true;
				break;
			}
		}
		if (isEmpty) {
			alert("جميع الحقول مطلوبة");
			return;
		}
		// hide the cars section, continue button, and get back button
		e.target.classList.add("d-none");
		backBtn.classList.add("d-none");
		$(".cars").addClass("d-none");
		$(".final-step-submit").removeClass("d-none");
		//  payment process progress
		document.querySelector(
			".progress-bar .bar:nth-child(2) .inner-bar"
		).style.backgroundColor = "#24ff00";
		document.querySelector(
			".progress-bar .bar:nth-child(3) span.dot"
		).style.backgroundColor = "#24ff00";
	}
	// hide current section
	currentSection.classList.remove("active");
	const nextSection = document.querySelector(
		`[data-progress='${nextSectionNumber}']`
	);
	// show next section
	nextSection.classList.add("active");
});

backBtn.addEventListener("click", (e) => {
	const currentSection = document.querySelector(".form-steps.active");
	const prevSectionNumber = +currentSection.getAttribute("data-progress") - 1;
	if (prevSectionNumber == 1) {
		backBtn.classList.add("d-none");
		// progress payment
		document.querySelector(
			".progress-bar .bar:first-child .inner-bar"
		).style.backgroundColor = "transparent";
		document.querySelector(
			".progress-bar .bar:nth-child(2) span.dot"
		).style.backgroundColor = "#707070";
	}
	// hide current section
	currentSection.classList.remove("active");
	const prevSection = document.querySelector(
		`[data-progress='${prevSectionNumber}']`
	);
	// show next section
	prevSection.classList.add("active");
});

// when fhinshing the paying process
enterDetailsBtn.addEventListener("click", (e) => {
	const section = document.querySelector("section.step-3");
	const fieldsOfSecondSection = [
		...Array.from(section.querySelectorAll("input")),
		...Array.from(section.querySelectorAll("select")),
	];
	let isEmpty = false;
	for (let i = 0; i < fieldsOfSecondSection.length; ++i) {
		if (fieldsOfSecondSection[i].value.trim() == "") {
			isEmpty = true;
			break;
		}
	}
	if (isEmpty) {
		alert("جميع الحقول مطلوبة");
		return;
	} else {
		Swal.fire({
			title: "<h3 class = 'align-right'>هل تريد دفع عربون؟</h3>",
			html: `<h5 class = 'align-right'>سيتم حجز المركبة لمدة 3 ايام في حال تم دفع العربون 
			ويجب عليك التواصل مع المعرض ل اكمال صفقة الشراء</h5>
			<br />
			<p class = 'align-right'>و في حال عدم التواصل مع المعرض لن يكون لك الحق في استرجاع العربون </p>`,
			confirmButtonText: "موافق",
			showCloseButton: true,
			buttonsStyling: false,
			confirmButtonText: "موافق",
			customClass: {
				confirmButton: "btn btn-lg px-5 rounded-pill d-block confirmBtn",
			},
		}).then((res) => {
			if (res.isConfirmed) {
				swal.fire({
					title: "تمت عملية الدفع بنجاح",
					icon: "success",
					iconColor: "black",
					showCloseButton: true,
					buttonsStyling: false,
					confirmButtonText: "تم",
					customClass: {
						confirmButton: "btn btn-lg px-5 rounded-pill d-block confirmBtn",
					},
				});
				// .then((result) => {
				// 	if (result.isConfirmed) {
				// 		$("form").submit();
				// 	}
				// });
			}
		});
	}
});

// declare it
var dkbgLinks = document.querySelectorAll('.dkbg-link'), i;
var ltbgLinks = document.querySelectorAll('.ltbg-link'), j;
var dkbgBorder = document.querySelectorAll('.dkbg-border'), k;
var imgsAll = document.querySelectorAll('img');
var ltbgAll = document.querySelectorAll('.ltbg-link');
var dkbgAll = document.querySelectorAll('.dkbg-link');
var hoverTrgtAll = document.querySelectorAll('.hover-target');
var portfDescrAll = document.querySelectorAll('div.portfolio-descr');
// const dkbgClassList = ['pink', 'orange', 'teal', 'green', 'yellow', 'blue', 'purple'];
// const ltbgClassList = ['purple', 'blue', 'pink', 'rylblue', 'orange', 'teal', 'green'];
// let dkbgColorClass = "";
// let ltbgColorClass = "";


// const saturateImgs = () => {
// 	[].forEach.call(imgsAll, el => {
// 		el.classList.add("saturate");
// 	})
// }
// const saturatePrtfDescr = () => {
// 	[].forEach.call(portfDescrAll, el => {
// 		el.classList.add("saturate");
// 	})
// }
const colorLtBgLinks = () => {
	[].forEach.call(ltbgAll, el => {
		el.classList.add("color");
	})
}
const colorDkBgLinks = () => {
	[].forEach.call(dkbgAll, el => {
		el.classList.add("color");
	})
}
const hoverTargets = () => {
	[].forEach.call(hoverTrgtAll, el => {
		el.classList.add("color");
	})
}

const saturateAll = () => {
	// saturateImgs();
	// saturatePrtfDescr();
	colorLtBgLinks();
	colorDkBgLinks();
	// colorHoverTargets();
}
// const desaturateImgs = () => {
// 	[].forEach.call(imgsAll, el => {
// 		el.classList.remove("saturate");
// 	})
// }
// const desaturatePrtfDescr = () => {
// 	[].forEach.call(portfDescrAll, el => {
// 		el.classList.remove("saturate");
// 	})
// }
const decolorLtBgLinks = () => {
	[].forEach.call(ltbgAll, el => {
		el.classList.remove("color");
	})
}
const decolorDkBgLinks = () => {
	[].forEach.call(dkbgAll, el => {
		el.classList.remove("color");
	})
}
const decolorHoverTargets = () => {
	[].forEach.call(hoverTrgtAll, el => {
		el.classList.remove("color");
	})
}
const desaturateAll = () => {
	// desaturateImgs();
	// desaturatePrtfDescr();
	decolorLtBgLinks();
	decolorDkBgLinks();
	// decolorHoverTargets();
}
// const hoverPrtfDescr = () => {
// 	[].forEach.call(portfDescrAll, el => {
// 		el.addEventListener("mouseover", saturateAll);
// 		el.addEventListener("mouseout", desaturateAll);
// 	})
// }
// const hoverImgs = () => {
// 	[].forEach.call(imgsAll, el => {
// 		el.addEventListener("mouseover", saturateAll);
// 		el.addEventListener("mouseout", desaturateAll);
// 	})
// }
const hoverLtBg = () => {
	[].forEach.call(ltbgAll, el => {
		el.addEventListener("mouseover", saturateAll);
		el.addEventListener("mouseout", desaturateAll);
	})
}
const hoverDkBg = () => {
	[].forEach.call(dkbgAll, el => {
		el.addEventListener("mouseover", saturateAll);
		el.addEventListener("mouseout", desaturateAll);
	})
}
const hoverTarget = () => {
	[].forEach.call(hoverTrgtAll, el => {
		el.addEventListener("mouseover", saturateAll);
		el.addEventListener("mouseout", desaturateAll);
	})
}

window.addEventListener("load", function () {
	// hoverPrtfDescr();
	// hoverImgs();
	hoverLtBg();
	hoverDkBg();
	hoverTarget();
});

// plan it
// function dkbgRandom() {
// 	dkbgColorClass = dkbgClassList[Math.floor(Math.random() * dkbgClassList.length)];
// 	return dkbgColorClass;
// }
// function ltbgRandom() {
// 	ltbgColorClass = ltbgClassList[Math.floor(Math.random() * ltbgClassList.length)];
// 	return ltbgColorClass;
// }

// do it

// window.addEventListener("load", function() {
// 	for (i = 0; i < dkbgLinks.length; ++i) {
	//   dkbgRandom();
	//   dkbgLinks[i].classList.add(dkbgColorClass);
// 	}
// });
// window.addEventListener("load", function() {
// 	for (j = 0; j < ltbgLinks.length; ++j) {
	//   ltbgRandom();
	//   ltbgLinks[j].classList.add(ltbgColorClass);
// 	}
// });
// window.addEventListener("load", function() {
// 	for (j = 0; j < dkbgBorder.length; ++j) {
// 	  dkbgRandom();
// 	  dkbgBorder[j].classList.add(dkbgColorClass);
// 	}
// });


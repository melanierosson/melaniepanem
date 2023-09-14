const nameLinesAll = document.querySelectorAll("h1.name-line");
const nameLine1 = document.getElementById("name-line-1");
const nameLine2 = document.getElementById("name-line-2");
const nameLine3 = document.getElementById("name-line-3");
const melpTxtAll = document.querySelectorAll('span.txt-drkgray');
const ltbgAll = document.querySelectorAll('.ltbg-link');
const dkbgAll = document.querySelectorAll('.dkbg-link');

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
const saturateAll = () => {
    colorLtBgLinks();
    colorDkBgLinks();
}

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
const desaturateAll = () => {
    decolorLtBgLinks();
    decolorDkBgLinks();
}

const removeAnim = () => {
	[].forEach.call(nameLinesAll, el => {
		el.classList.remove("active");
	});
}
const animateMelp = () => {
    [].forEach.call(melpTxtAll, el => {
        el.classList.add("ltbg-anim");
        saturateAll();
        setTimeout(function () {  
            el.classList.remove('ltbg-anim');
            desaturateAll();
        }, 1000);
    });
}

nameLine1.addEventListener('click', () => {
    if (nameLine1.classList.contains('active')) { animateMelp();} else {
        nameLine1.classList.add('active');
        animateMelp();
        setTimeout(function () { nameLine1.classList.remove('active'); }, 3500);
    }
});
nameLine1.addEventListener('mouseover', () => {
    if (nameLine1.classList.contains('active')) { animateMelp();} else {
        nameLine1.classList.add('active');
        animateMelp();
        setTimeout(function () { nameLine1.classList.remove('active'); }, 3500);
    }
});

nameLine2.addEventListener('click', () => {
    if (nameLine2.classList.contains('active')) { animateMelp(); } else {
        nameLine2.classList.add('active');
        animateMelp();
        setTimeout(function () { nameLine2.classList.remove('active'); }, 3500);
    }
});
nameLine2.addEventListener('mouseover', () => {
    if (nameLine2.classList.contains('active')) { animateMelp();} else {
        nameLine2.classList.add('active');
        animateMelp();
        setTimeout(function () { nameLine2.classList.remove('active'); }, 3500);
    }
});

nameLine3.addEventListener('click', () => {
    if (nameLine3.classList.contains('active')) { animateMelp(); } else {
        nameLine3.classList.add('active');
        animateMelp();
        setTimeout(function () { nameLine3.classList.remove('active'); }, 3500);
    }
});
nameLine3.addEventListener('mouseover', () => {
    if (nameLine3.classList.contains('active')) { animateMelp(); } else {
        nameLine3.classList.add('active');
        animateMelp();
        setTimeout(function () { nameLine3.classList.remove('active'); }, 3500);
    }
});

const hoverLtBg = () => {
    [].forEach.call(ltbgAll, el => {
        el.addEventListener("mouseover", saturateAll);
        el.addEventListener("mouseout", desaturateAll);
    })
};
const hoverDkBg = () => {
    [].forEach.call(dkbgAll, el => {
        el.addEventListener("mouseover", saturateAll);
        el.addEventListener("mouseout", desaturateAll);
    })
};

window.addEventListener("load", function () {
    hoverLtBg();
    hoverDkBg();
});
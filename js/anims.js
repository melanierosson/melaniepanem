const nameLinesAll = document.querySelectorAll("h1.name-line");
const nameLine1 = document.getElementById("name-line-1");
const nameLine2 = document.getElementById("name-line-2");
const ltbgAll = document.querySelectorAll('.ltbg-link');


function animateNameMobile(){

    for (let i = 0; i < 5; i++) {
      if (i === 1) {
        nameLine1.classList.add("anim");
      }
      if (i === 2) {
        setTimeout(() => {
          nameLine1.classList.remove("anim");
        }, "1000");
      }
      if (i === 3) {
        setTimeout(() => {
          nameLine2.classList.add("anim");
        }, "2400");
      }
      if (i === 4) {
        setTimeout(() => {
          nameLine2.classList.remove("anim");
        }, "3400");
      }
      if (i === 5) {
        i = 0; 
        continue;
      }
    }
}

animateNameMobile();


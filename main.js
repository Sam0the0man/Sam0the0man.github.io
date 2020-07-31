let hex = [];
let hsl = ``
let darkMode = window.matchMedia('(prefers-color-scheme: dark)');
// Favicons
let link = document.getElementById('link');
let darkFavicon = 'Assets/DarkFavicon.ico';
let lightFavicon = 'Assets/LightFavicon.ico';

// Check view mode and change background accordingly
// Ran initially
if (darkMode.matches) {
    hex = ["#442222", "#111111"];
    hsl = `hsla(0, 100%, 50%, ${Math.random() * 0.25})`;
    
    link.setAttribute("href", darkFavicon);
} else {
    hex = ["#9AD1D4", "#003249"];
    hsl = `hsla(195, 100%, 33%, ${Math.random() * 0.25})`;
    // getIcon(lightFavicon);

    link.setAttribute("href", lightFavicon);
}
// Ran everytime it changes
darkMode.addEventListener('change', event => {
    if (event.matches) {
            //dark mode
        hex = ["#442222", "#111111"];
        hsl = `hsla(0, 100%, 50%, ${Math.random() * 0.25})`;
        
        link.setAttribute("href", darkFavicon);

        bubbly({
            colorStart: hex[0],
            colorStop: hex[1],
            blur: 2,
            bubbleFunc: () => hsl
        });
    } else {
        //light mode
        hex = ["#9AD1D4", "#003249"];
        hsl = `hsla(195, 100%, 33%, ${Math.random() * 0.25})`;
        
        link.setAttribute("href", lightFavicon);

        bubbly({
            colorStart: hex[0],
            colorStop: hex[1],
            blur: 2,
            bubbleFunc: () => hsl
        });
    }
})

bubbly({
    colorStart: hex[0],
    colorStop: hex[1],
    blur: 2,
    bubbleFunc: () => hsl
});

let TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<div class="sequence" data-end="`">`' + this.txt + '</div>';

    let that = this;
    let delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }
    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }
    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
let elements = document.getElementsByClassName('sequence');
for (let i=0; i<elements.length; i++) {
    let toRotate = elements[i].getAttribute('data-rotate');
    let period = elements[i].getAttribute('data-period');
    if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
}
// INJECT CSS
let css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".sequence > .wrap { border-right: 0.08em solid #666 } .sequence::first-letter { color: transparent; } .sequence::after { content: attr(data-end); color: transparent; }";
document.body.appendChild(css);
};
// Sidebar
// $(document).ready(function() {
//     let trigger = $('.hamburger'),
//         overlay = $('.overlay'),
//        isClosed = false;

//     function buttonSwitch() {

//         if (isClosed === true) {
//             overlay.hide();
//             trigger.removeClass('is-open');
//             trigger.addClass('is-closed');
//             isClosed = false;
//         } else {
//             overlay.show();
//             trigger.removeClass('is-closed');
//             trigger.addClass('is-open');
//             isClosed = true;
//         }
//     }

//     trigger.click(function () {
//         buttonSwitch();
//     });

//     $('[data-toggle="offcanvas"]').click(function () {
//         $('#wrapper').toggleClass('toggled');
//     });
// });

// // Check if iOS Device and add app is it is
let iOSDevice = !!navigator.platform.match(/iPhone|iPod|iPad/);
let gitImg = document.createElement("img");
let gitSrc = document.getElementById("gitHub");
let oldIMG;

if (iOSDevice) {
    let img = document.createElement("img");
    img.src = "Assets/Bullseye_Image.png";
    img.width = "32"

    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = "#iOS_App { padding-left: 10px; padding-right: 10px; }";
    document.body.appendChild(css);
    
    let src = document.getElementById("iOS_App");
    src.appendChild(img);
}
// Check view mode and add github logo accordingly
// Ran initially
if (darkMode.matches) {
    gitImg.src = "Assets/GitHub-Mark-Light-32px.png";
    gitImg.width = "32";
    gitSrc.appendChild(gitImg);
    oldIMG = gitImg;
} else {
    gitImg.src = "Assets/GitHub-Mark-32px.png";
    gitImg.width = "32";
    gitSrc.appendChild(gitImg);
    oldIMG = gitImg;
    console.log("Ran")
}
// Ran everytime it changes
darkMode.addEventListener('change', event => {
    if (event.matches) {
        //dark mode
        gitImg.src = "Assets/GitHub-Mark-Light-32px.png";
        gitImg.width = "32";
        gitSrc.replaceChild(gitImg, oldIMG)
        oldIMG = gitImg
    } else {
        //light mode
        gitImg.src = "Assets/GitHub-Mark-32px.png";
        gitImg.width = "32";
        gitSrc.replaceChild(gitImg, oldIMG)
        oldIMG = gitImg
    }
});

/* Set the width of the sidebar to 250px (show it) */
let buttonDiv = document.querySelector(".openbtn"); 
buttonDiv.id = "open";
let button = buttonDiv.querySelector("button");
console.log(button);

let sidePanel = document.getElementById("mySidepanel");

buttonDiv.addEventListener('click', function() {
    if (buttonDiv.id == "open") {
    openNav();
    buttonDiv.id = "close";
    button.innerHTML = "&#60;"
} else if (buttonDiv.id == "close") {
    closeNav();
    buttonDiv.id = "open";
    button.innerHTML = "&#62;"
}
});
function openNav() {
    sidePanel.style.width = "25vw";
    button.style.marginLeft = "20vw";
    button.style.transition = "0.3s";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    sidePanel.style.width = "0vw";
    button.style.marginLeft = "0vw";
    button.style.transition = "0.3s";
  }
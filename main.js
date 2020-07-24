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

$(document).ready(function() {
    let trigger = $('.hamburger'),
        overlay = $('.overlay'),
       isClosed = false;

    function buttonSwitch() {

        if (isClosed === true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    trigger.click(function () {
        buttonSwitch();
    });

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });
});
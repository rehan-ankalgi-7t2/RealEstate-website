const body = document.body;
const scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0];
const height = scrollWrap.getBoundingClientRect().height - 1;
const speed = 0.1;

var offset = 0;

body.style.height = Math.floor(height) + "px";

const smoothScroll = () => {
    offset += (window.pageYOffset - offset) * speed;

    var scroll = "translateY(-" + offset + "px) translateZ(0)";
    scrollWrap.style.transform = scroll;

    callScroll = requestAnimationFrame(smoothScroll);
};

smoothScroll();
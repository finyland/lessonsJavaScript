
// window size without scrollbar

const mainElement = document.documentElement; //HTML
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeight);

// window size with scrollbar

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log(windowWidth);
console.log(windowHeight);

// document size

let scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
);
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

console.log(scrollWidth);
console.log(scrollHeight);

// scrolled pixels

const scrolledPixelsTop = window.pageYOffset;
const scrolledPixelsLeft = window.pageXOffset;

console.log(scrolledPixelsTop);
console.log(scrolledPixelsLeft);

// method scrollBy

function setScrollBy() {
    window.scrollBy(0, 50); // (x, y)
    const windowScrollTop = window.pageYOffset;
    console.log(windowScrollTop);
}

function setScrollTo() {
    window.scrollTo(0, 50);
}
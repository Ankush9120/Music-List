function moredetails1() {
    var element = document.getElementById("movie1");
    element.classList.toggle("more-songs1");
}

function moredetails2() {
    var element = document.getElementById("movie2");
    element.classList.toggle("more-songs2");
}

function moredetails3() {
    var element = document.getElementById("movie3");
    element.classList.toggle("more-songs3");
}

function moredetails4() {
    var element = document.getElementById("movie4");
    element.classList.toggle("more-songs4");
}

function moredetails5() {
    var element = document.getElementById("movie5");
    element.classList.toggle("more-songs5");
}

VanillaTilt.init(document.querySelectorAll(".movie-cover"), {
    max: 10,
    speed: 500,
});
VanillaTilt.init(document.querySelectorAll(".movie-songs"), {
    max: 10,
    speed: 500,
});


// -------- MUSIC 1 ---------

var music1 = document.getElementById('music1'),
    btn1 = document.getElementById('btn1');


isPlaying1 = false;

function togglePlay1() {
    isPlaying1 ? music1.pause() : music1.play();
};

music1.onplaying = function () {
    isPlaying1 = true;
    btn1.classList.add("music-on");
};
music1.onpause = function () {
    isPlaying1 = false;
    btn1.classList.remove("music-on");
};

// -------- MUSIC 2 ---------

var music2 = document.getElementById('music2'),
    btn2 = document.getElementById('btn2');


isPlaying2 = false;

function togglePlay2() {
    isPlaying2 ? music2.pause() : music2.play();
};

music2.onplaying = function () {
    isPlaying2 = true;
    btn2.classList.add("music-on");
};
music2.onpause = function () {
    isPlaying2 = false;
    btn2.classList.remove("music-on");
};
// -------- MUSIC 3 ---------

var music3 = document.getElementById('music3'),
    btn3 = document.getElementById('btn3');


isPlaying3 = false;

function togglePlay3() {
    isPlaying3 ? music3.pause() : music3.play();
};

music3.onplaying = function () {
    isPlaying3 = true;
    btn3.classList.add("music-on");
};
music3.onpause = function () {
    isPlaying3 = false;
    btn3.classList.remove("music-on");
};
// -------- MUSIC 4 ---------

var music4 = document.getElementById('music4'),
    btn4 = document.getElementById('btn4');


isPlaying4 = false;

function togglePlay4() {
    isPlaying4 ? music4.pause() : music4.play();
};

music4.onplaying = function () {
    isPlaying4 = true;
    btn4.classList.add("music-on");
};
music4.onpause = function () {
    isPlaying4 = false;
    btn4.classList.remove("music-on");
};
// -------- MUSIC 5 ---------

var music5 = document.getElementById('music5'),
    btn5 = document.getElementById('btn5');


isPlaying5 = false;

function togglePlay5() {
    isPlaying5 ? music5.pause() : music5.play();
};

music5.onplaying = function () {
    isPlaying5 = true;
    btn5.classList.add("music-on");
};
music5.onpause = function () {
    isPlaying5 = false;
    btn5.classList.remove("music-on");
};
// -------- MUSIC 6 ---------

var music6 = document.getElementById('music6'),
    btn6 = document.getElementById('btn6');


isPlaying6 = false;

function togglePlay6() {
    isPlaying6 ? music6.pause() : music6.play();
};

music6.onplaying = function () {
    isPlaying6 = true;
    btn6.classList.add("music-on");
};
music6.onpause = function () {
    isPlaying6 = false;
    btn6.classList.remove("music-on");
};
// -------- MUSIC 7 ---------

var music7 = document.getElementById('music7'),
    btn7 = document.getElementById('btn7');


isPlaying7 = false;

function togglePlay7() {
    isPlaying7 ? music7.pause() : music7.play();
};

music7.onplaying = function () {
    isPlaying7 = true;
    btn7.classList.add("music-on");
};
music7.onpause = function () {
    isPlaying7 = false;
    btn7.classList.remove("music-on");
};
// -------- MUSIC 8 ---------

var music8 = document.getElementById('music8'),
    btn8 = document.getElementById('btn8');


isPlaying8 = false;

function togglePlay8() {
    isPlaying8 ? music8.pause() : music8.play();
};

music8.onplaying = function () {
    isPlaying8 = true;
    btn8.classList.add("music-on");
};
music8.onpause = function () {
    isPlaying8 = false;
    btn8.classList.remove("music-on");
};
// -------- MUSIC 9 ---------

var music9 = document.getElementById('music9'),
    btn9 = document.getElementById('btn9');


isPlaying9 = false;

function togglePlay9() {
    isPlaying9 ? music9.pause() : music9.play();
};

music9.onplaying = function () {
    isPlaying9 = true;
    btn9.classList.add("music-on");
};
music9.onpause = function () {
    isPlaying9 = false;
    btn9.classList.remove("music-on");
};
// -------- MUSIC 10 ---------

var music10 = document.getElementById('music10'),
    btn10 = document.getElementById('btn10');


isPlaying10 = false;

function togglePlay10() {
    isPlaying10 ? music10.pause() : music10.play();
};

music10.onplaying = function () {
    isPlaying10 = true;
    btn10.classList.add("music-on");
};
music10.onpause = function () {
    isPlaying10 = false;
    btn10.classList.remove("music-on");
};
// -------- MUSIC 11 ---------

var music11 = document.getElementById('music11'),
    btn11 = document.getElementById('btn11');


isPlaying11 = false;

function togglePlay11() {
    isPlaying11 ? music11.pause() : music11.play();
};

music11.onplaying = function () {
    isPlaying11 = true;
    btn11.classList.add("music-on");
};
music11.onpause = function () {
    isPlaying11 = false;
    btn11.classList.remove("music-on");
};
// -------- MUSIC 12 ---------

var music12 = document.getElementById('music12'),
    btn12 = document.getElementById('btn12');


isPlaying12 = false;

function togglePlay12() {
    isPlaying12 ? music12.pause() : music12.play();
};

music12.onplaying = function () {
    isPlaying12 = true;
    btn12.classList.add("music-on");
};
music12.onpause = function () {
    isPlaying12 = false;
    btn12.classList.remove("music-on");
};
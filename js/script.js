let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordindex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordindex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordindex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000)

//language 

document.addEventListener('DOMContentLoaded', function() {
    const checkBox = document.querySelector('.check');
    const enText = document.querySelector('#en');
    const esText = document.querySelector('#es');
    
    // Verificar el estado almacenado en localStorage para el idioma
    const savedLanguage = localStorage.getItem('language');
    
    if (savedLanguage === 'es') {
        checkBox.checked = true;
        enText.style.color = 'var(--text-color)';
        esText.style.color = 'var(--hover-color)';
    } else {
        checkBox.checked = false;
        enText.style.color = 'var(--hover-color)';
        esText.style.color = 'var(--text-color)';
    }

    // Evento cuando se cambia el estado del checkbox
    checkBox.addEventListener('change', function() {
        if (checkBox.checked) {
            enText.style.color = 'var(--text-color)';
            esText.style.color = 'var(--hover-color)';
            localStorage.setItem('language', 'es');
            setTimeout(function() {
                location.href = "es/index.html";
            }, 300);
        } else {
            enText.style.color = 'var(--hover-color)';
            esText.style.color = 'var(--text-color)';
            localStorage.setItem('language', 'en');
            setTimeout(function() {
                location.href = "../index.html"; 
            }, 300);
        }
    });
});

//nava bar
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 50)
})

//toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open");
}

window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navList.classList.remove("open");
}

//active menu
let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

//parallax animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));
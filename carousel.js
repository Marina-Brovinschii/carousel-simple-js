const IMAGES =[  // se scrie cu CAPS pentru ca este o constanta care nu poate fi ulterior modificata, respectiv pentru a fi mai in evidenta
    "images/791-800x600.jpg",
    "images/900-800x600.jpg",
    "images/1043-800x600.jpg"
]

let currentIndex = 0

const EFFECTS =[
    "animate__fadeInRight",
    "animate__fadeInLeft",
    "animate__bounceIn"
]

const TITLES = [
    "Cappadocia",
    "Pod",
    "Riu in munti"
]

function showImage(n) {
    let i = Math.round(Math.random() * 3)

    carouselSlides.innerHTML =
    `<img src="${IMAGES[n]}" 
    class="animate__animated ${EFFECTS[i]}"/>`
}

function showTitle(n) {
    carouselTitles.innerHTML =
        `<h4 class="animate__animated animate__pulse">${TITLES[n]}</h4>`
}

function showIndicators (n) {
    carouselIndicators.innerHTML= ``
    for (let i=0; i<IMAGES.length; i++) {
        if (i==n) {
            carouselIndicators.innerHTML += `✅ `
        } else {
            carouselIndicators.innerHTML += `⧈ `
        }
    }
}

function prev() {
    if (currentIndex>0) {
        currentIndex--
        showImage(currentIndex)
        showTitle(currentIndex)
        showIndicators(currentIndex)
    } 
}

function next() {
    if (currentIndex<2) {
        currentIndex++
        showImage(currentIndex)
        showTitle(currentIndex)
        showIndicators(currentIndex)
    }
}

function action() {
    switch (event.key) {
        case 'ArrowLeft':
            prev()
            break
        case 'ArrowRight':
            next()
            break
    }
}

showImage(currentIndex)
showTitle(currentIndex)
showIndicators(currentIndex)



function play() {
    setInterval(next,3000)
}

play()



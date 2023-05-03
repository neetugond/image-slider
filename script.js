let prevButton = document.getElementById('prevButton');
let nextButton = document.getElementById('nextButton')
let div = document.getElementById('main')
let image = document.getElementById('img')


let imageArr = [
    'https://cdn.pixabay.com/photo/2023/04/24/17/48/bird-7948712_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/21/12/29/owl-1845060_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/03/13/10/25/hummingbird-2139279_960_720.jpg'
]

let currentImg = 0

image.setAttribute('src', imageArr[currentImg])

prevButton.addEventListener('click', function () {
    currentImg--;
    if (currentImg < 0) {
        currentImg = imageArr.length-1
    }
    image.setAttribute('src', imageArr[currentImg])
})

nextButton.addEventListener('click', function () {
    currentImg++
    if (currentImg >= imageArr.length) {
        currentImg = 0
    }
    image.setAttribute('src', imageArr[currentImg])
})


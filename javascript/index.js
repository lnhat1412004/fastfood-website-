window.addEventListener('DOMContentLoaded', function () {
    var pathName = window.location.pathname;
    var homeLink = document.getElementById('homeLink');
    var productLink = document.getElementById('productLink');
    var aboutLink = document.getElementById('aboutLink');
    var contactLink = document.getElementById('contactLink');

    // Kiểm tra pathName và thêm class active cho liên kết tương ứng
    if (pathName === '/index.html') {
        homeLink.classList.add('active');
    } else if (pathName === '/trangcon/Menu.html') {
        productLink.classList.add('active');
    } else if (pathName === '/gioi-thieu') {
        aboutLink.classList.add('active');
    } else if (pathName === '/trangcon/LienHe.html') {
        contactLink.classList.add('active');
    }
});

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
    
});


const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

if (next) {
    next.addEventListener('click', function (event) {
        event.preventDefault()
        if (count == 1) {
          // Xem hết bình luận
          return false
        }
        translateY += -100
        comment.style.transform = `translateX(${translateY}%)`
        count--
    });
}

if (prev) {
    prev.addEventListener('click', function (event) {
        event.preventDefault()
        if (count == 3) {
          // Xem hết bình luận
          return false
        }
        translateY += 100
        comment.style.transform = `translateX(${translateY}%)`
        count++
    });
}

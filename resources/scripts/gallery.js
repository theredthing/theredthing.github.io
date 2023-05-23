document.querySelectorAll('.container .picture img').forEach(picture =>{
    picture.onclick = () => {
        document.querySelector('.popup-pic').style.display = 'block';
        document.querySelector('.popup-pic img').src = picture.getAttribute('data-src');
    }
})

document.querySelector('.popup-pic span').onclick = () => {
    document.querySelector('.popup-pic').style.display = 'none';
}
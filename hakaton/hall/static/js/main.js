$('.header-burger-menu').on('click', (e) => {
  $('.header-nav').toggleClass('active');
});

$('.search_open').on('click', (e) => {
  $('.search_line').addClass('showed')
})

$('.search_close').on('click', (e) => {
  $('.search_line').removeClass('showed')
})

$('.image-viewer-close').on('click', (e) => {
  closeImageViewer()
})

let imageViewer = document.querySelector('.image-viewer');
let imageViewerImgSlot = imageViewer.querySelector('img')

document.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    closeImageViewer();
  }
})

let filesElements = document.querySelectorAll('.fond-folder.file');
for (let i = 0; i < filesElements.length; i++) {
  filesElements[i].addEventListener('click', (event) => {
    let imageSrc = filesElements[i].querySelector('img').src;
    openImageViewer(imageSrc)
  })
}

function openImageViewer(src) {
  imageViewerImgSlot.src = src;
  imageViewer.classList.remove('hide')
}

function closeImageViewer() {
  imageViewer.classList.add('hide')
  imageViewerImgSlot.src = ''
}
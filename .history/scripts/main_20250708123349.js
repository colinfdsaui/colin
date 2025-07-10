$(function() {
  const pages = ['images/resume-pages-0.png', 'images/resume-pages-1.png'];
  const $fb = $('#flipbook');
  let current = 1; // track current single page

  // 1) Inject pages
  pages.forEach(src => {
    $fb.append(`<div class="page"><img src="${src}"></div>`);
  });


  // 4) Buttons & keys
  $('#prev-page').click(() => $fb.turn('previous'));
  $('#next-page').click(() => $fb.turn('next'));
  $(document).keydown(e => {
    if (e.key === 'ArrowLeft')  $fb.turn('previous');
    if (e.key === 'ArrowRight') $fb.turn('next');
  });

  // 5) Zoom on image click
  $fb.on('click', '.page img', function(e) {
    e.stopPropagation();
    $(this).toggleClass('zoomed');
  });
});

window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') { // Check if the pressed key is Escape
  var overlay = document.querySelector('.image-overlay'); // Get the overlay element
  overlay.style.display = 'none'; // Hide the overlay
  }
  });

  .btn::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; height: 50%;
  background: rgba(255,255,255,0.4);
  border-radius: inherit;
}



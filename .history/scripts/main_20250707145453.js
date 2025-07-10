var flipbookEL = document.getElementById('flipbook');

window.addEventListener('resize', function (e) {
	flipbookEL.style.width = '';
  flipbookEL.style.height = '';
  $(flipbookEL).turn('size', flipbookEL.clientWidth, flipbookEL.clientHeight);
});

$(flipbookEL).turn({
    autoCenter: true
});

$(function () {
  const totalPages = 2;      // your two‑page doc
  const $fb = $('#flipbook');
  let zoomed = false;

  // 1) Append pages
  for (let i = 0; i < totalPages; i++) {
    $fb.append(`
      <div class="page">
        <img src="images/resume-pages-${i}.png" alt="Page ${i+1}">
      </div>
    `);
  }

  // 2) Initialize in single‑page mode
  $fb.turn({
    width: 800,
    height: 600,
    autoCenter: true,
    gradients: true,
    elevation: 50,
    display: 'single',
    page: 1
  });

  // 3) Prev/Next
  $('#prev-page').on('click', () => $fb.turn('previous'));
  $('#next-page').on('click', () => $fb.turn('next'));

  // 4) Keyboard
  $(document).on('keydown', e => {
    if (e.key === 'ArrowLeft') $fb.turn('previous');
    if (e.key === 'ArrowRight') $fb.turn('next');
  });

  // 5) Toggle Spread: switch between single/double display  
  $('#toggle-spread').on('click', () => {
    const current = $fb.turn('display');                 // 'single' or 'double'
    const nextMode = current === 'single' ? 'double' : 'single';
    $fb.turn('display', nextMode);                       // switch
    // if switching to single, stay on current page
    if (nextMode === 'single') {
      const pg = $fb.turn('page');
      $fb.turn('page', pg);
    }
  });

  // 6) Zoom: CSS scale on the container
  $('#zoom').on('click', () => {
    if (!zoomed) {
      $fb.css({
        transform: 'scale(2)',
        transformOrigin: 'center center'
      });
    } else {
      $fb.css('transform', 'scale(1)');
    }
    zoomed = !zoomed;
  });
});

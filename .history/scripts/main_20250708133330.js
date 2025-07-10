// Jump‑to‑page handler
$('#goto-page').click(() => {
  const $input = $('#goto-page-input');
  const val    = parseInt($input.val(), 10);

  // Validate
  if (!val || val < 1 || val > totalPages) {
    alert(`Please enter a page between 1 and ${totalPages}.`);
    $input.val('');   // clear invalid input
    return;
  }

  // Turn.js API call: go straight to `val`
  $fb.turn('page', val);
  $input.blur();     // dismiss mobile keyboards, if any
});

// Optional: allow Enter‑key in the input
$('#goto-page-input').on('keydown', e => {
  if (e.key === 'Enter') {
    $('#goto-page').click();
  }
});

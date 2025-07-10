const url = 'pdfs/goodnightsweet2e.pdf';
const flipbook = document.getElementById('flipbook');

// Load PDF
pdfjsLib.getDocument(url).promise.then(pdf => {
  const numPages = pdf.numPages;
  // Create a canvas for each page
  for (let i = 1; i <= numPages; ++i) {
    const pageDiv = document.createElement('div');
    pageDiv.className = 'page';
    const canvas = document.createElement('canvas');
    pageDiv.appendChild(canvas);
    flipbook.appendChild(pageDiv);

    // Render page into canvas
    pdf.getPage(i).then(page => {
      const viewport = page.getViewport({ scale: 1.5 });
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      page.render({ canvasContext: canvas.getContext('2d'), viewport });
    });
  }

  // Initialize Turn.js (after canvases added)
  $('#flipbook').turn({
    width: 800,
    height: 600,
    autoCenter: true
  });
});

$(function() {
  const url = 'mydoc.pdf';
  pdfjsLib.getDocument(url).promise.then(pdf => {
    const flipbook = $('#flipbook');
    flipbook.empty();       // just in case
    for (let i = 1; i <= pdf.numPages; i++) {
      const pageDiv = $('<div class="page"><canvas></canvas></div>');
      flipbook.append(pageDiv);
      pdf.getPage(i).then(page => {
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = pageDiv.find('canvas')[0];
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        page.render({ canvasContext: canvas.getContext('2d'), viewport });
      });
    }
    // initialize after canvases exist
    flipbook.turn({ width: 800, height: 600, autoCenter: true, gradients: true });
  });
});

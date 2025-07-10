// Load the PDF document
const loadingTask = pdfjsLib.getDocument("pdfs/GoodnightSweet2e.pdf").promise;

loadingTask.then(pdf => {
  console.log("PDF loaded, number of pages:", pdf.numPages);
  return pdf.getPage(1);
}).then(page => {
  // Render page 1 onto a <canvas>...
});

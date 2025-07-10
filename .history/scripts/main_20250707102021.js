console.log("main.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready — initializing flipbook");
  // your existing code…
  const loadingTask = pdfjsLib.getDocument("pdfs/GoodnightSweet2e.pdf").promise;
  // …
});

// wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const pdfPath = "pdfs/GoodnightSweet2e.pdf";

  // 1) load the PDF
  const loadingTask = pdfjsLib.getDocument(pdfPath).promise;

  // 2) wrap in the flipbook‑viewer “book” interface
  const book = {
    numPages: async () => (await loadingTask).numPages,
    getPage: async (n, cb) => {
      const pdf  = await loadingTask;
      const page = await pdf.getPage(n);
      const vp   = page.getViewport({ scale: 1.5 });
      const canvas = document.createElement("canvas");
      canvas.width  = vp.width;
      canvas.height = vp.height;
      await page.render({ canvasContext: canvas.getContext("2d"), viewport: vp }).promise;
      cb(canvas);
    }
  };

  // 3) init the viewer (window.flipbook from UMD bundle)
  window.flipbook(
    book,
    "flipbook",
    { width: 800, height: 600 },
    (err, viewer) => {
      if (err) {
        console.error("Flipbook init error:", err);
        return;
      }
      console.log("Flipbook ready, pages:", viewer.page_count);
      document.getElementById("prev").onclick = () => viewer.flip_back();
      document.getElementById("next").onclick = () => viewer.flip_forward();
      document.getElementById("zoom").onclick = () => viewer.zoom();
    }
  );
});

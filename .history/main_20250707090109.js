const url = 'pdfs/GoodnightSweet2e.pdf';
const flipbook = document.getElementById('flipbook');
/*
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
  const url = 'pdfs/GoodnightSweet2e.pdf';
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
});*/

var options = {
        pdf: 'pdfs/goodnightsweet2e.pdf', // you should use this property or pageCallback and pages to specify your book
        pageCallback: function(n) { // this function has to return source description for FlipBook page
          // for image sources
          var imageDescription = {
            type: 'image',
            src: 'example/' + n + '.jpg',
            interactive: false
          };
          // for html sources
          var htmlDescription = {
            type: 'html',
            src: 'example/' + n + '.html',
            interactive: true // or false - if your page interact with the user then use true
          };
          // for blank page
          var blankDescription = {
            type: 'blank'
          };
          return htmlDescription; // or imageDescription or blankDescription
        },
        pages: 10, // amount of pages
        controlsProps: { // set of optional properties that allow to customize 3D FlipBook control
          downloadURL: 'example.pdf'
        },
        propertiesCallback: function(props) { // optional function - it lets to customize 3D FlipBook
          props.page.depth /= 2;
          props.cover.binderTexture = 'exampleTexture.jpg';
          props.cssLayersLoader = function(n, clb) {// n - page number
            clb([{
              css: '.heading {margin-top: 200px;background-color: red;}',
              html: '<h1 class="heading">Hello</h1>',
              js: function (jContainer, props) { // jContainer - jQuery element that contains HTML Layer content
                console.log('init');
                return { // set of callbacks
                  hide: function() {console.log('hide');},
                  hidden: function() {console.log('hidden');},
                  show: function() {console.log('show');},
                  shown: function() {console.log('shown');},
                  dispose: function() {console.log('dispose');}
                };
              }
            }]);
          };
          return props;
        },
        template: { // by means this property you can choose appropriate skin
          html: 'templates/default-book-view.html',
          styles: [
            'css/black-book-view.css'// or one of white-book-view.css, short-white-book-view.css, shart-black-book-view.css
          ],
          links: [{
            rel: 'stylesheet',
            href: 'css/font-awesome.min.css'
          }],
          script: 'js/default-book-view.js',
          printStyle: undefined, // or you can set your stylesheet for printing ('print-style.css')
          sounds: {
            startFlip: 'sounds/start-flip.mp3',
            endFlip: 'sounds/end-flip.mp3'
          }
        },
        pdfLinks: {
          handler: function(type, destination) { // type: 'internal' (destination - page number), 'external' (destination - url)
            return true; // true - prevent default handler, false - call default handler
          }
        },
        autoNavigation: {
          urlParam: 'fb3d-page', // url query param name for deep linking: http://example.com?fb3d-page=10
          navigates: 1, // number of instances that will be navigated automatically,
          pageN: undefined // auto open page pageN
        },
        bookStyle: 'volume', // volume, flat or volume-paddings
        activateFullScreen: false, // activate fullscreen if it is possible (API can only be initiated by a user gesture)
        ready: function(scene) { // optional function - this function executes when loading is complete

        },
        error: function(e) { // optional function for notification about errors

        }
      };
      var book = $('container-selector').FlipBook(options);
let file;
let img;
let tiles, tileSize;

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = loadImage(file.data, '');
    console.log("img loaded!")
  } else {
    img = null;
  }
}

function setup() {
  createCanvas(500, 500);
  input = createFileInput(handleFile);
  slider = createSlider(1, 45, 10, 0.5);
  colorMode(RGB, 255);

}

function draw() {
  background(220);

  noStroke();

  if (img) {
    // image(img, 0, 0, width, height);
    img.resize(500,500)
    tiles = slider.value();
    tileSize = width/tiles;
    translate(tileSize/2, tileSize/2);

    for(x = 0; x < tiles; x++) {
      for(y = 0; y < tiles; y++) {
  
        c = img.get(x*tileSize, y*tileSize);
        size = map(brightness(c), 0, 255, 20, 0);
        
        fill(c);
        ellipse(x*tileSize, y*tileSize, size, size);
      }
    }
  
  }

}


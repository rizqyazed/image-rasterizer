let file;
let img;
let tiles, tileSize;
var button;
var colour = false;

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = loadImage(file.data, '');
    console.log("img loaded!")
  } else {
    img = null;
  }
}

function toggleColour() {
  if (colour) {
    colour = false;
  } else if (!colour) {
    colour = true;
  }
}

function setup() {
  createCanvas(550, 550);
  input = createFileInput(handleFile);
  slider = createSlider(1, 45, 10, 0.5);
  button = createButton("Colour");
  button.mousePressed(toggleColour);
  colorMode(RGB, 255);

}

function draw() {
  background(220);

  noStroke();

  if (img) {
    // image(img, 0, 0, width, height);
    img.resize(width,height)
    tiles = slider.value();
    tileSize = width/tiles;
    translate(tileSize/2, tileSize/2);

    for(x = 0; x < tiles; x++) {
      for(y = 0; y < tiles; y++) {
  
        c = img.get(x*tileSize, y*tileSize);
        size = map(brightness(c), 0, 100, 25, 0);
        if (colour) {
          fill(c);
          ellipse(x*tileSize, y*tileSize, size, size);
        } else {
          fill(0);
          ellipse(x*tileSize, y*tileSize, size, size);
        }
      }
    }
  
  }

}


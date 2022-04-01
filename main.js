function preload() { }

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();
}

Webcam.set({
  width: 640,
  height: 480,
  image_format: "png",
  png_quality: 90,
});

function draw() { }

function take_snapshot() {
  save("me.png");
}
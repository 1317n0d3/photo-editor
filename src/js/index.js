const width = 640;
const height = 420;

const canvas = document.getElementById("canvas");
canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext("2d");
const newImage = document.getElementById("newImage");

const img = new Image();
img.src = "./src/images/sample.jpg";
img.onload = function () {
  console.log(this.width, this.height);
  ctx.drawImage(img, 0, 0, width, height);
};

function previewFile() {
  const file = document.querySelector("input[type=file]").files[0];
  const reader = new FileReader();

  reader.onloadend = function () {
    img.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    img.src = "";
  }
}

newImage.addEventListener("change", previewFile);

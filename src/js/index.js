let imgElement = document.getElementById("imageSrc");
let inputElement = document.getElementById("fileInput");
let canvas = document.getElementById("canvasOutput");
const ctx = canvas.getContext("2d");

let fileSizeInKb = 0;
let fileType = "unknown type";
let colorDepth = 0;
let colorScheme = "unknown scheme";

inputElement.addEventListener(
  "change",
  (e) => {
    const file = e.target.files[0];
    imgElement.src = URL.createObjectURL(file);

    fileType = file.type.split("/")[1];
    fileSizeInKb = Math.round(file.size / 1024);
  },
  false
);

imgElement.onload = function () {
  let mat = cv.imread(imgElement);

  console.log(mat.channels());

  cv.imshow("canvasOutput", mat);

  const imgData = ctx.getImageData(
    0,
    0,
    imgElement.naturalWidth,
    imgElement.naturalHeight
  );

  console.log(imgData.data);

  console.log(imgData.data.BYTES_PER_ELEMENT * 8);

  console.log(
    imgData.data.length / (imgElement.naturalWidth * imgElement.naturalHeight)
  );

  setImageInfo(imgElement, fileSizeInKb, colorDepth, fileType, colorScheme);

  mat.delete();
};

const Module = {
  // https://emscripten.org/docs/api_reference/module.html#Module.onRuntimeInitialized
  onRuntimeInitialized() {
    document.getElementById("status").innerHTML = "OpenCV.js is ready.";
  },
};

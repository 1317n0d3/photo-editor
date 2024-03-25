let imgElement = document.getElementById("imageSrc");
let inputElement = document.getElementById("fileInput");

let fileSizeInKb = 0;

inputElement.addEventListener(
  "change",
  (e) => {
    const file = e.target.files[0];
    imgElement.src = URL.createObjectURL(file);

    fileSizeInKb = Math.round(file.size / 1024);
  },
  false
);

imgElement.onload = function () {
  let mat = cv.imread(imgElement);
  setImageInfo(imgElement, fileSizeInKb);

  cv.imshow("canvasOutput", mat);

  mat.delete();
};

const Module = {
  // https://emscripten.org/docs/api_reference/module.html#Module.onRuntimeInitialized
  onRuntimeInitialized() {
    document.getElementById("status").innerHTML = "OpenCV.js is ready.";
  },
};

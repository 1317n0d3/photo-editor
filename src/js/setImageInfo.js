const infoSize = document.querySelector("#infoSize");
const infoResolution = document.querySelector("#infoResolution");
const infoColorDepth = document.querySelector("#infoColorDepth");
const infoFileFormat = document.querySelector("#infoFileFormat");
const infoColorScheme = document.querySelector("#infoColorScheme");

const setImageInfo = (imgElement, size) => {
  let width = imgElement.naturalWidth;
  let height = imgElement.naturalHeight;

  infoSize.innerHTML = `Size: ${size}kb`;
  infoResolution.innerHTML = `Resolution: ${width} x ${height}`;
  infoColorDepth.innerHTML = `Color depth: `;
  infoFileFormat.innerHTML = `File format: `;
  infoColorScheme.innerHTML = `Color scheme: `;
};

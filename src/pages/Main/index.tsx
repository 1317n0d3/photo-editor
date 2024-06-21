import { useRef, useState } from "react";
import FileInput from "../../components/FileInput";
import styles from "./Main.module.scss";
import cv from "@techstark/opencv-js";

const Main = () => {
  const [imgUrl, setImgUrl] = useState<string>("");
  const canvas = useRef<HTMLCanvasElement>(null);

  const handleImgUrlChange = (imgUrl: string) => {
    setImgUrl(imgUrl);
  };

  const proccessImage = (imgSrc: HTMLImageElement) => {
    console.log(imgSrc);

    const img = cv.imread(imgSrc);

    const imgGray = new cv.Mat();
    cv.cvtColor(img, imgGray, cv.COLOR_BGR2GRAY);
    if (canvas.current) {
      cv.imshow(canvas.current, imgGray);
    }
  };

  return (
    <div className={styles.wrapper}>
      <FileInput handleImgUrlChange={handleImgUrlChange} />
      {/* <div class="inputoutput"> */}
      {/* <div class="output-container"> */}
      {/* <div class="output-container"> */}
      {imgUrl && (
        <div className={styles.inputOutput}>
          <div className={styles.outputContainer}>
            <label>Source</label>
            <img
              className={styles.output}
              src={imgUrl}
              alt="empty"
              onLoad={(e) => proccessImage(e.target as HTMLImageElement)}
            />
          </div>
          <div className={styles.outputContainer}>
            <label>Result</label>
            <canvas className={styles.output} ref={canvas}></canvas>
          </div>
        </div>
      )}
      {/* <div class="info"> */}
      <div>
        <div id="infoSize">Size KB</div>
        <div id="infoResolution">Resolution</div>
        <div id="infoColorDepth">Color depth</div>
        <div id="infoFileFormat">File format</div>
        <div id="infoColorScheme">Color scheme</div>
      </div>
    </div>
  );
};

export default Main;

import { FC } from "react";
import styles from "./FileInput.module.scss";

type Props = {
  handleImgUrlChange: (url: string) => void;
};

const FileInput: FC<Props> = (props) => {
  return (
    <div>
      <label className={styles.darkButton}>
        <input
          className={styles.fileInput}
          type="file"
          id="fileInput"
          name="file"
          accept="image/png, image/jpeg"
          onChange={(e) => {
            if (e.target.files) {
              console.log(e.target.files[0]);
              props.handleImgUrlChange(URL.createObjectURL(e.target.files[0]));
            }
          }}
        />
        Open image
      </label>
    </div>
  );
};

export default FileInput;

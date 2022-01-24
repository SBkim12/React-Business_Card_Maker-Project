import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    // 이미지 선택 창을 다시 열고 선택을 하지 않고 닫을시 동작 정지
    if (!event.target.files[0]) {
      return;
    }
    console.log(event.target.files[0]);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      ;
      <button className={styles.button} onClick={onButtonClick}>
        {name || "No file"}
      </button>
    </div>
  );
};

export default ImageFileInput;

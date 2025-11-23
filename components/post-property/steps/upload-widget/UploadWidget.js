import React, { useState, useRef } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./UploadWidget.module.css";
import { Button } from "@mui/material";

const UploadWidget = ({ handleUploadImages }) => {
  const [files, setFiles] = useState([]);      // store actual file objects
  const [previews, setPreviews] = useState([]); // store preview URLs
  const [active, setActive] = useState(false);

  const dropRef = useRef(null);
  const inputRef = useRef(null);

  const handleFiles = (incomingFiles) => {
    const arr = Array.from(incomingFiles);

    // merge old + new files
    const updatedFiles = [...files, ...arr];

    setFiles(updatedFiles);
    setPreviews(updatedFiles.map((file) => URL.createObjectURL(file)));

    // send final selected images to parent
    handleUploadImages(updatedFiles);
  };

  // Remove one image
  const handleRemove = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);

    // regenerate previews
    setPreviews(updatedFiles.map((file) => URL.createObjectURL(file)));

    // send updated list to parent
    handleUploadImages(updatedFiles);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    handleFiles(e.dataTransfer.files);
    setActive(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  return (
    <div>
      <div
        ref={dropRef}
        className={`${styles.drop_area} ${
          active ? styles.active_border : styles.inactive_border
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <CloudUploadIcon color="primary" className={styles.uploadIcon} />
        <p className={styles.drag}>Drag & Drop photos here</p>
        <p className={styles.browse}>or click to browse</p>

        <input
          ref={inputRef}
          id="fileInput"
          type="file"
          multiple
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => handleFiles(e.target.files)}
        />

        <Button
          variant="contained"
          onClick={() => inputRef.current.click()}
          className={styles.upload_button}
        >
          Browse Photos
        </Button>
      </div>

      {/* Preview section */}
      {previews.length > 0 && (
        <div className={styles.preview}>
          {previews.map((src, i) => (
            <div key={i} className={styles.preview_item}>
              <img src={src} alt="preview" className={styles.preview_img} />

              {/* remove button */}
              <button
                className={styles.remove_btn}
                onClick={() => handleRemove(i)}
              >
                <CloseIcon fontSize="small" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadWidget;

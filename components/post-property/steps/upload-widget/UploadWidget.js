import React, { useState, useRef } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styles from './UploadWidget.module.css';

const UploadWidget = ({ onFilesSelected }) => {
  const [previews, setPreviews] = useState([]);
  const dropRef = useRef(null);

  const handleFiles = (files) => {
    const arr = Array.from(files);
    setPreviews(arr.map((file) => URL.createObjectURL(file)));
    onFilesSelected(arr); // return actual files to parent
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    handleFiles(files);

    dropRef.current.classList.remove("border-blue-500");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    dropRef.current.classList.add("border-blue-500");
  };

  const handleDragLeave = () => {
    dropRef.current.classList.remove("border-blue-500");
  };

  return (
    <div>
      <div
        ref={dropRef}
        className={styles.drop_area}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => document.getElementById("fileInput").click()}
      >
      <CloudUploadIcon color="primary" className={styles.uploadIcon} />
        <p className="text-gray-600 text-lg">Drag & Drop images here</p>
        <p className="text-gray-400 text-sm">or click to browse</p>

        <input
          id="fileInput"
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {/* Preview section */}
      {previews.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-4">
          {previews.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="preview"
              className="w-full h-32 object-cover rounded-lg shadow"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadWidget;

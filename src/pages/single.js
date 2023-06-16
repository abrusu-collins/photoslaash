import React from "react";
import Compressor from "compressorjs";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
    action: "https://photoslaash.vercel.app/single",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
      const currentFile = info.file;
      console.log(currentFile);

      new Compressor(currentFile, {
        quality: 0.6,

        // The compression process is asynchronous,
        // which means you have to access the `result` in the `success` hook function.
        success(result) {
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            return window.navigator.msSaveOrOpenBlob(result);
          } else {
            const data = window.URL.createObjectURL(result);
            const link = document.createElement("a");
            link.href = result;
            link.download = `${info.file.name}`;
            document.body.appendChild(link);
            link.click();
          }

          console.log("Upload success");
          //   });
        },
        error(err) {
          console.log(err.message);
        },
      });

      // });
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
function single() {
  return (
    <div className="single">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </Dragger>
    </div>
  );
}

export default single;

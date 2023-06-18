import React, { useState } from "react";
import Compressor from "compressorjs";
import { useToast } from "@chakra-ui/react";
import { Slider, Switch } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;

function Single() {
  const [currentFile, setCurrentFile] = useState("");
  const [quality, setQuality] = useState(0.5);
  const [disabled, setDisabled] = useState(false);
  const toast = useToast();
  const props = {
    name: "file",
    multiple: false,
    action: "http://localhost:3000/",
    beforeUpload: () => false,
    onChange(info) {
      message.success(`${info.file.name} file uploaded successfully.`);
      setCurrentFile(info.file);
      console.log(currentFile);
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  const onChange = (e) => {
    setQuality(e / 100);
  };
  const download = (e) => {
    e.preventDefault();
    new Compressor(currentFile, {
      quality: quality,

      success(result) {
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          return window.navigator.msSaveOrOpenBlob(result);
        } else {
          const data = window.URL.createObjectURL(result);
          const link = document.createElement("a");
          link.href = data;
          link.download = `${currentFile.name}`;
          document.body.appendChild(link);
          link.click();
          toast({
            title: "Compressed image downloaded",
            description: `Size of compressed image is ${(
              result.size /
              1000 /
              1000
            ).toFixed(3)} MB`,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }
      },
      error(err) {
        console.log(err.message);
        if (
          err.message === "The first argument must be a File or Blob object."
        ) {
          toast({
            title: "Please upload the image you want to compress",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      },
    });
  };
  return (
    <div className="single">
      <p className="title">Upload and compress a single image</p>
      <div className="dragger">
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">Support for a single file upload.</p>
        </Dragger>
      </div>
      <div className="slider">
        <p> Quality(%)</p>
        <Slider defaultValue={50} disabled={disabled} onChange={onChange} />
      </div>
      <a href="" onClick={download}>
        Download
      </a>
    </div>
  );
}

export default Single;

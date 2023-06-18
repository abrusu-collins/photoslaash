import React, { useEffect, useState } from "react";
import Compressor from "compressorjs";
import { useToast } from "@chakra-ui/react";
import { Slider, Switch } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;

function Multiple() {
  const [currentFile, setCurrentFile] = useState("");
  const [quality, setQuality] = useState(0.5);
  const [disabled, setDisabled] = useState(false);
  const toast = useToast();
  const props = {
    name: "file",
    multiple: true,
    action: "http://localhost:3000/",
    beforeUpload: () => false,
    onChange(info) {
      // message.success(`${info.file.name} file uploaded successfully.`);
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
  const download = () => {
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
              1024 /
              1024
            ).toFixed(3)} MB`,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }
      },
      error(err) {
        console.log(err.message);
      },
    });
  };

  useEffect(() => {
    if (currentFile) {
      download();
    }
  }, [currentFile]);
  return (
    <div className="single">
      <p className="title">Upload and compress multiple images</p>
      <p className="info">
        Note that for multiple images, the download is automatic so make sure
        you set the quality before uploading
      </p>
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
      {/* <a href="" onClick={download}>
        Download
      </a> */}
    </div>
  );
}

export default Multiple;

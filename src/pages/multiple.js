import React, { useEffect, useState } from "react";
import Compressor from "compressorjs";
import { useToast } from "@chakra-ui/react";
import { Slider, Switch } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import nProgress, * as NProgress from "nprogress";
import "nprogress/nprogress.css";
const { Dragger } = Upload;

function Multiple() {
  const [currentFile, setCurrentFile] = useState("");
  const [quality, setQuality] = useState(0.5);
  const [showToast, setShowToast] = useState(false);
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
    setShowToast(false);
    NProgress.start();
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
          NProgress.inc(0.2);
          setTimeout(() => {
            nProgress.done();
            setShowToast(true);
          }, 5000);
        }
      },
      error(err) {
        console.log(err.message);
        toast({
          title: "An error occurred",
          description: "Refresh and try again",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      },
    });
  };

  useEffect(() => {
    if (currentFile) {
      download();
    }
  }, [currentFile]);
  useEffect(() => {
    if (showToast) {
      toast({
        title: "Done",
        description: "All your images have been comprrssed and downloaded",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [showToast]);
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
    </div>
  );
}

export default Multiple;

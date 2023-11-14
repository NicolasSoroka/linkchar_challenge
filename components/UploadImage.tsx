"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import { axiosUploadStory } from "@/app/api/axios";
import { Plus } from "lucide-react";
import FileInput from "./ImageCropper/FileInput";
import ImageCropper from "./ImageCropper/ImageCropper";

const UploadImage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [image, setImage] = useState("");
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [imgAfterCrop, setImgAfterCrop] = useState("");

  const onImageSelected = (selectedImg) => {
    setImage(selectedImg);
    setCurrentPage("crop-img");
  };

  const onCropDone = (imgCroppedArea) => {
    const canvasEle = document.createElement("canvas");
    canvasEle.width = imgCroppedArea.width;
    canvasEle.height = imgCroppedArea.height;

    const context = canvasEle.getContext("2d");

    let imageObj1 = new Image();
    imageObj1.src = image;
    imageObj1.onload = function () {
      context.drawImage(
        imageObj1,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height
      );

      const dataURL = canvasEle.toDataURL("image/png");

      setImgAfterCrop(dataURL);
      setCurrentPage("img-cropped");
    };
  };

  const onCropCancel = () => {
    setCurrentPage("choose-img");
    setImage("");
  };

  const handleUpload = async () => {
      try {
        const formData = new FormData();
        formData.append("file", imgAfterCrop);
        const data = await axiosUploadStory(formData);
        // console.log(data)

        // let imageBlob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));

        // let formData = new FormData();
        // formData.append("firstName", "John");
        // formData.append("image", imageBlob, "image.png");
      } catch(e) {
        console.log(e)
      }
    };

  return (
    <>
      <Button
        onPress={onOpen}
        type="submit"
        className="w-64 text-sm font-normal h-9 rounded-3xl px-2 py-4 bg-white/10 dark:border dark:border-black dark:hover:bg-white hover:bg-white/20 transition ease-in-out duration-300 text-white dark:text-black"
      >
        <Plus className="mr-2 h-4 w-4" /> Subir historia
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          body: "p-8",
          backdrop: "bg-[#000]/50 backdrop-opacity-40",
          base: "bg-[#242424] dark:bg-[#242424] text-white",
          closeButton:
            "hover:bg-white/5 active:bg-white/10 mr-8 mt-5 scale-150",
        }}
      >
        <ModalContent className="w-[418px] h-[484px] rounded-xl">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col items-center mt-3 pb-0">
                Subir nueva historia
              </ModalHeader>
              <ModalBody className="flex w-full h-full">
                {currentPage === "choose-img" ? (
                  <FileInput
                    setImage={setImage}
                    onImageSelected={onImageSelected}
                  />
                ) : currentPage === "crop-img" ? (
                  <ImageCropper
                    image={image}
                    onClose={onClose}
                    onCropDone={onCropDone}
                    onCropCancel={onCropCancel}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center m-auto text-[#C2C2C2] gap-y-6 w-[210px] h-[300px] rounded-xl">
                    <img src={imgAfterCrop} className="w-full h-full" />
                    <Button
                      className="w-64 text-sm font-normal min-h-[38px] h-[38px] rounded-3xl px-2 py-4 bg-white/10 hover:bg-white/20 transition ease-in-out duration-300 text-white"
                      onClick={handleUpload}
                    >
                      Subir historia
                    </Button>
                  </div>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default UploadImage;

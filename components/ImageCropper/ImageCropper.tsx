import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { Button } from "../ui/button";

function ImageCropper({
  image,
  onCropDone,
  onCropCancel,
  onClose,
}) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  return (
    <div className="flex flex-col relative items-center justify-center text-[#C2C2C2] w-full h-full rounded-xl">
      <Cropper
        image={image}
        aspect={9 / 16}
        crop={crop}
        zoom={zoom}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
        style={{
          containerStyle: {
            position: "relative",
            margin: "auto",
            marginTop: "0",
            width: "210px",
            height: "300px",
            backgroundColor: "#fff",
          },
        }}
      />

      <div className="flex relative items-center justify-center w-full">
        <button
          className=""
          onClick={() => {
            onCropDone(croppedArea);
          }}
        >
          Cortar
        </button>
      </div>
    </div>
  );
}

export default ImageCropper;

import React, { useRef } from "react";

function FileInput({ onImageSelected }) {
  const inputRef = useRef();

  const handleOnChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function (e) {
        onImageSelected(reader.result);
      };
    }
  };

  const onChooseImg = () => {
    inputRef.current.click();
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleOnChange}
        style={{ display: "none" }}
      />

      <button
        className="flex items-center justify-center text-[#C2C2C2] relative w-full h-full border-dashed border-2 border-[#C2C2C2] rounded-xl"
        onClick={onChooseImg}
      >Selecciona tu imagen aqui</button>
    </>
  );
}

export default FileInput;

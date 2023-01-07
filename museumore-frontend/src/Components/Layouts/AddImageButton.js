import React from "react";
import "../../Assets/CSS/button.css";

function AddImageButton(params) {
  let style = {
    width: params.width,
    marginLeft: params.marginLeft,
  };

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = async (event) => {
    if (event.target.files) {
      await params.stateChanger(event.target.files[0]);
    }
  };

  return (
    <>
      <button
        className={"add-image-button " + params.shape}
        style={style}
        onClick={handleClick}
      >
        <div className="dummy" />
        {params.text}
      </button>

      <input
        type="file"
        ref={hiddenFileInput}
        style={{ display: "none" }}
        onChange={handleChange}
      />
    </>
  );
}

export default AddImageButton;

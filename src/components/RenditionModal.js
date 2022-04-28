import React, { useEffect } from "react";
import Modal from "react-modal";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const boxStyle = {'borderRadius':'10px'};

const RenditionModal = ({ data,showModal,closeModal }) => {

  useEffect(() => {
    console.log("use effect called in rendition");
  });

  var arr = [];
  for (var obj in data) {
    if (data[obj].url)
      arr.push(
        <li className="flexy-item" key={obj}>
          <LazyLoadImage src={data[obj].url}  
            effect="blur"
            style={boxStyle}
            placeholderSrc={process.env.PUBLIC_URL + "/placeholder.png"}
            alt=""/>
        </li>
      );
  }


  return (
    <Modal
      isOpen={showModal}
      onRequestClose={() => closeModal()}
      style={{
        overlay: { backgroundColor: "grey" }
      }}
    >
      <header style={{"fontSize":"30px"}}>Renditions</header>
      <ul className="flexy-container">{arr}</ul>
      <button onClick={() => closeModal()}>Close</button>
    </Modal>
  );
};

export default RenditionModal;

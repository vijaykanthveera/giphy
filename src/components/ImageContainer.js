import React from "react";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const ImageContainer = (item) => {
  
    return (
      <LazyLoadImage
        id={item.item.id}
        src={item.item.images.original_still.url}
        alt={item.item.images.original_still.hash}
        onClick={(e)=>item.clickHandler(e)} 
        width="300px"
        height="300px"
        effect="blur"
        data-testid="image"
        style={{'borderRadius':'10px'}}
        placeholderSrc={process.env.PUBLIC_URL + "/placeholder.png"}
      />
    );
  };

export default ImageContainer;
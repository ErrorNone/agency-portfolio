import React from "react";
import {  useSelector } from "react-redux";
import ImagesItem from "./ImagesItem";

const ImagesList = () => {
  const images = useSelector((state) => state.images.images);
  console.log(images);
  return <div>{images.map(image => <ImagesItem key={Date.now} image={image}/>)}</div>;
};

export default ImagesList;

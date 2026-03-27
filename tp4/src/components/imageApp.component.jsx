import '../assets/style/murImages.css';

import dataImages from "../data/dataImages.js"
import ImageWall from './ImageWall.jsx';
import ImageDetails from './ImageDetails.jsx';
import img5 from'../images/image5.jpg'
import { useState } from 'react';
const ImageApp = () => {
  
  const [image,setImage]=useState("../images/image5.jpg");
  const [texte,setTexte]=useState("la plus belle ...");
  const [filterText,setFilterText]=useState("");
  function imageChanged(newImage,newText){
   setImage(newImage);
   setTexte(newText);
  }

  return (
    <div><ImageWall images={dataImages} imageChanged={imageChanged}filterText={filterText}/><ImageDetails
    image={image}
    texte={texte}
    setFilterText={setFilterText}
    /></div>
  );
}
export default ImageApp;

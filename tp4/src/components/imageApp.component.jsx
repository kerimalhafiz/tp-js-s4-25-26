import '../assets/style/murImages.css';

import dataImages from "../data/dataImages.js"
import ImageWall from './ImageWall.jsx';
import ImageDetails from './ImageDetails.jsx';
import img5 from'../images/image5.jpg'
const ImageApp = () => {

  return (
    <div><ImageWall images={dataImages}/><ImageDetails
    image="../images/image5.jpg"
    texte="la plus belle ..."
    /></div>
  );
}
export default ImageApp;

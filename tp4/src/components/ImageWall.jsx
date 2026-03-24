import ImageApp from "./imageApp.component.jsx";

const ImageWall=({images})=>{
    return (<div id="mur">{
        images.map((img)=>(
        <img
        key={img.image}
        src={img.image}
        alt={img.texte}
        title={img.texte}
        />
   ) )} </div>
);
}
export default ImageWall;
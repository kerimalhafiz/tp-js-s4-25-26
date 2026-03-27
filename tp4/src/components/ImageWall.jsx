import ImageApp from "./imageApp.component.jsx";

const ImageWall=({images,imageChanged,filterText})=>{

    const filteredImgaes=images.filter((img)=>
    img.texte.toLowerCase().includes(filterText.toLowerCase()));
    return (<div id="mur">{
        filteredImgaes.map((img)=>(
        <img
        key={img.image}
        src={img.image}
        alt={img.texte}
        title={img.texte}
        onMouseOver={()=>imageChanged(img.image,img.texte)}
        />
   ) )} </div>
);
}
export default ImageWall;
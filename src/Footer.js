import React from "react";
import "./footer.css";
import img1 from "./img/nublado.png";
import img2 from "./img/soleado.png";
import img3 from "./img/tormenta.png";
import img4 from "./img/nube-lluviosa.png";
import img5 from "./img/tormenta.png";
import Day from "./Day";

export default function Footer(){
  return (  
     <footer className="footer">
       <Day icon={img1} name="Mon" temp="32" />
       <Day icon={img2} name="Tue" temp="20" />
       <Day icon={img3} name="Wed" temp="10" />
       <Day icon={img4} name="Thu" temp="15" />
       <Day icon={img5} name="Fri" temp="21" />
     </footer>
     );
}
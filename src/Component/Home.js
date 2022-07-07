import * as React from 'react';
import "../Component/Home.css";
import { Back_Logo } from "../util/constants";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (

    <div>
    <nav className="navbar navbar-expand-sm bg-primary navbar-primary">
    <div className="container-fluid">
     <h1 className="center">Awesome Portal</h1>
    </div>
    </nav>
    <img src={Back_Logo} className={` img-responsive`} />
    <h1 className='textleft'>Excellent Necklace 6*8</h1>
    <h1 className='textleft'>Diamond AD</h1>
    <ToggleButtonGroup
      color="standard"
      value={alignment}
      exclusiveRed
      onChange={handleChange}
    >
      <ToggleButton value="red">Red</ToggleButton>
      <ToggleButton value="blue">Blue</ToggleButton>
      <ToggleButton value="green">Green</ToggleButton>
    </ToggleButtonGroup>


    <h1 className="lefttext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard<br/> dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book.<br/> 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essentially unchanged. <br/>It was popularised in the 1960s with the release of Letraset
     sheets containing Lorem Ipsum passages, and more recently
     with desktop publishing software like<br/> Aldus PageMaker including versions of Lorem Ipsum
    
     It is a long established fact that a reader will be distracted by the readable content 
     of a page when looking at its layout.<br/> The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
     of letters, as opposed to using 'Content here, content here', making it look like readable English.<br/> Many desktop publishing packages and 
     web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
     Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

     Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
     looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
     (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
   The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

   
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  
     </h1>

     <div>
     <footer>
   <div class="footer">
     <p>Copyright © 2022 <a href="#">Awesome Portal</a> All rights reserved</p>
   </div>
 </footer>
     </div>
    </div>
   
  );
}

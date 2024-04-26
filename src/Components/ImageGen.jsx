import React from 'react'
import html2canvas from 'html2canvas';
import Text1 from './BG Templates/Template1/Text1.jsx';
import Text2 from './BG Templates/Template2/Text2.jsx';
import Text3 from './BG Templates/Template3/Text2.jsx';




class ImageGen extends React.Component {
    captureImage = () => {
      const template_num = 3
      const elementToCapture = document.getElementById(`template${template_num}`);
  
      html2canvas(elementToCapture)
        .then((canvas) => {
          const image = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.href = image;
          link.download = 'infographai_image.png';
          link.click();
        })
        .catch((error) => {
          console.error('Error capturing image:', error);
        });
    };
  
    render() {
      return (
        <div>
          <Text1/>
          <button className ={'fg-button'} onClick={this.captureImage}>Download Image</button>
          <Text2/>
          <button className ={'fg-button'} onClick={this.captureImage}>Download Image</button>
          <Text3/>
          <button className ={'fg-button'} onClick={this.captureImage}>Download Image</button>
        </div>
      );
    }
}
export default ImageGen






 
import React from 'react'
import html2canvas from 'html2canvas';
import Text1 from './BG Templates/Template1/Text1.jsx';




class ImageGen extends React.Component {
    captureImage = () => {
      const elementToCapture = document.getElementById('template1');
  
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
        </div>
      );
    }
}
export default ImageGen






 
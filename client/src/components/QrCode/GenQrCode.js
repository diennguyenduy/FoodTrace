import React from 'react';
import QRCode from 'qrcode.react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const downloadQR = () => {
  const canvas = document.getElementById('product-qrcode');
  const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
  console.log('pngUrl', pngUrl);
  let downloadLink = document.createElement('a');
  downloadLink.href = pngUrl;
  downloadLink.download = 'viblo-tranchien.png';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

const GenQrCode = (props) => {
  return (
    <Modal isOpen={props.isOpen}>
      <ModalHeader>Mã QR Của Sản Phẩm</ModalHeader>
      <ModalBody>
        <QRCode id='product-qrcode' level='H' includeMargin value='AAA' />
      </ModalBody>
      <ModalFooter>
        <a href='#' onClick={downloadQR}>
          Download QR
        </a>
        <Button onClick={closeModal}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};

export default GenQrCode;

import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

function PortfolioQR({ url }) {
  return (
    <div className="qr-block">
      <QRCodeSVG
        value={url}
        size={140}
        fgColor="#1f2933"
        bgColor="#ffffff"
      />
      <p>Scan to visit my portfolio</p>
    </div>
  );
}

export default PortfolioQR;

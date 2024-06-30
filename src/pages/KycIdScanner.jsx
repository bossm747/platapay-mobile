import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import Tesseract from 'tesseract.js';
import { Button } from "@/components/ui/button";

const KycIdScanner = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [ocrResult, setOcrResult] = useState('');

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
    processImage(imageSrc);
  };

  const processImage = async (image) => {
    try {
      const result = await Tesseract.recognize(
        image,
        'eng',
        {
          logger: (m) => console.log(m),
        }
      );
      setOcrResult(result.data.text);
    } catch (error) {
      console.error('Error during OCR processing:', error);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900">
      <h1 className="text-white text-2xl font-bold mt-8">KYC ID Scanner</h1>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={320}
        height={240}
        className="mt-4"
      />
      <Button onClick={capture} className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full shadow-lg shadow-[rgba(0,0,0,0.5)] active:shadow-none active:translate-y-1 mt-4">Capture ID</Button>
      {imageSrc && (
        <div className="mt-4">
          <h2 className="text-white text-xl">Captured Image</h2>
          <img src={imageSrc} alt="Captured ID" className="mt-2" />
        </div>
      )}
      {ocrResult && (
        <div className="mt-4">
          <h2 className="text-white text-xl">OCR Result</h2>
          <pre className="text-white mt-2">{ocrResult}</pre>
        </div>
      )}
    </div>
  );
};

export default KycIdScanner;
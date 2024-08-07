import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import Tesseract from 'tesseract.js';
import { Button } from "@/components/ui/button";

const KycIdScanner = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [ocrResult, setOcrResult] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setImageSrc(imageSrc);
      processImage(imageSrc);
    }
  }, [webcamRef]);

  const processImage = async (image) => {
    setIsProcessing(true);
    try {
      const result = await Tesseract.recognize(
        image,
        'eng',
        { logger: m => console.log(m) }
      );
      setOcrResult(result.data.text);
    } catch (error) {
      console.error('Error during OCR processing:', error);
      setOcrResult('Error processing image. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 p-4">
      <h1 className="text-white text-2xl font-bold mb-8">KYC ID Scanner</h1>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="w-full max-w-md mb-4"
      />
      <Button 
        onClick={capture} 
        className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1 mb-4"
        disabled={isProcessing}
      >
        {isProcessing ? 'Processing...' : 'Capture ID'}
      </Button>
      {imageSrc && (
        <div className="w-full max-w-md mb-4">
          <h2 className="text-white text-xl mb-2">Captured Image</h2>
          <img src={imageSrc} alt="Captured ID" className="w-full" />
        </div>
      )}
      {ocrResult && (
        <div className="w-full max-w-md">
          <h2 className="text-white text-xl mb-2">OCR Result</h2>
          <pre className="text-white bg-blue-800 p-4 rounded overflow-auto">{ocrResult}</pre>
        </div>
      )}
    </div>
  );
};

export default KycIdScanner;

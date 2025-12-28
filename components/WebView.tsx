
import React, { useState, useEffect } from 'react';

interface WebViewProps {
  url: string;
  onLoad: () => void;
}

export const WebView: React.FC<WebViewProps> = ({ url, onLoad }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // If the page doesn't signal 'onLoad' within 8 seconds, it might be blocked
    const timer = setTimeout(() => {
      setHasError(true);
      onLoad();
    }, 8000);

    return () => clearTimeout(timer);
  }, [onLoad, url]);

  const handleIframeLoad = () => {
    setHasError(false);
    onLoad();
  };

  return (
    <div className="w-full h-full relative bg-slate-50">
      {hasError && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-slate-100">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md border border-slate-200">
            <div className="text-red-500 mb-4">
              <i className="fas fa-exclamation-triangle text-5xl"></i>
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">সংযোগ বিচ্ছিন্ন বা ব্লক করা হয়েছে</h2>
            <p className="text-slate-600 mb-6 text-sm">
              নিরাপত্তার কারণে গুগল এই সাইটটি অন্য অ্যাপের ভেতরে দেখাতে বাধা দিচ্ছে। নিচে বাটনে ক্লিক করে সরাসরি প্রবেশ করুন।
            </p>
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg active:scale-95"
            >
              সরাসরি ওয়েবসাইট দেখুন <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      )}
      
      <iframe
        src={url}
        onLoad={handleIframeLoad}
        title="Content Viewer"
        className="w-full h-full border-none"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; camera; microphone; geolocation"
        // Some sites allow embedding only without certain sandbox restrictions
        sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads allow-presentation"
      />
    </div>
  );
};

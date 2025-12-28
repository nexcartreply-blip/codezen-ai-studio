
import React, { useState, useCallback } from 'react';
import { BrowserHeader } from './components/BrowserHeader';
import { WebView } from './components/WebView';
import { TARGET_URL } from './constants';

const App: React.FC = () => {
  const [key, setKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleRefresh = useCallback(() => {
    setKey(prev => prev + 1);
    setIsLoading(true);
  }, []);

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="flex flex-col h-screen w-screen bg-slate-900 overflow-hidden">
      {/* Custom Browser Header (No search bar) */}
      <BrowserHeader 
        onRefresh={handleRefresh} 
        isLoading={isLoading}
      />
      
      {/* Main Content Area */}
      <main className="flex-1 relative bg-white">
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-900 text-white">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-slate-400 animate-pulse font-medium">Launching AI Studio...</p>
          </div>
        )}
        
        <WebView 
          key={key} 
          url={TARGET_URL} 
          onLoad={handleLoadComplete} 
        />
      </main>

      {/* Subtle Footer for Kiosk Feel */}
      <footer className="bg-slate-950 px-4 py-1 text-[10px] text-slate-500 flex justify-between items-center border-t border-slate-800">
        <span>Protected View Session</span>
        <div className="flex gap-3">
          <span className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Connected
          </span>
          <span>v1.0.2</span>
        </div>
      </footer>
    </div>
  );
};

export default App;

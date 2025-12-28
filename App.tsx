
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
    <div className="flex flex-col h-screen w-screen bg-slate-900 overflow-hidden select-none">
      {/* Custom Browser Header */}
      <BrowserHeader 
        onRefresh={handleRefresh} 
        isLoading={isLoading}
      />
      
      {/* Main Content Area */}
      <main className="flex-1 relative bg-white">
        {isLoading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-slate-900">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-blue-500/20 rounded-full"></div>
              <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-white text-lg font-medium tracking-wide">Secure Browser Loading</p>
              <p className="text-slate-500 text-xs mt-1">Establishing encrypted connection...</p>
            </div>
          </div>
        )}
        
        <WebView 
          key={key} 
          url={TARGET_URL} 
          onLoad={handleLoadComplete} 
        />
      </main>

      {/* Modern Status Footer */}
      <footer className="bg-slate-900 px-4 py-1.5 text-[10px] text-slate-400 flex justify-between items-center border-t border-slate-800/50">
        <div className="flex items-center gap-2">
          <i className="fas fa-lock text-green-500/80"></i>
          <span className="opacity-70">End-to-End Encrypted Session</span>
        </div>
        <div className="flex gap-4">
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            System Live
          </span>
          <span className="opacity-60 uppercase font-semibold letter-spacing-wider">Production v1.0.2</span>
        </div>
      </footer>
    </div>
  );
};

export default App;

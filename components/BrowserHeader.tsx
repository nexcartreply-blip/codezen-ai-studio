
import React from 'react';
import { APP_NAME } from '../constants';

interface BrowserHeaderProps {
  onRefresh: () => void;
  isLoading: boolean;
}

export const BrowserHeader: React.FC<BrowserHeaderProps> = ({ onRefresh, isLoading }) => {
  return (
    <header className="bg-slate-800 border-b border-slate-700 h-14 flex items-center px-4 justify-between shadow-lg z-20">
      <div className="flex items-center gap-4">
        {/* Browser Window Controls Mockup */}
        <div className="flex gap-2 mr-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-600 rounded-lg shadow-inner">
            <i className="fas fa-microchip text-white text-xs"></i>
          </div>
          <h1 className="text-slate-100 font-bold tracking-tight hidden sm:block">
            {APP_NAME}
          </h1>
        </div>
      </div>

      {/* URL Display (Read Only) */}
      <div className="flex-1 max-w-2xl mx-8 hidden md:block">
        <div className="bg-slate-900/50 border border-slate-700 rounded-full px-4 py-1.5 flex items-center gap-2 group transition-all hover:bg-slate-900">
          <i className="fas fa-lock text-green-500 text-[10px]"></i>
          <span className="text-slate-400 text-xs truncate select-none">
            aistudio.google.com/apps/drive/...
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={onRefresh}
          className={`p-2.5 rounded-full transition-all flex items-center justify-center
            ${isLoading ? 'text-blue-400 animate-spin' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
          title="Reload App"
        >
          <i className="fas fa-sync-alt"></i>
        </button>
        
        <div className="h-6 w-[1px] bg-slate-700 mx-1"></div>
        
        <button className="text-slate-400 hover:text-white transition-colors p-2">
          <i className="fas fa-ellipsis-v"></i>
        </button>
      </div>
    </header>
  );
};

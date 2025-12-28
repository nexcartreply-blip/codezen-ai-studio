
import React from 'react';
import { APP_NAME } from './constants';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-slate-950 text-slate-200 font-sans p-8 overflow-auto">
      <div className="max-w-3xl mx-auto w-full space-y-12">
        {/* Header Section */}
        <header className="text-center space-y-4">
          <div className="inline-block p-4 bg-blue-600 rounded-3xl shadow-2xl shadow-blue-500/20 mb-4">
            <i className="fas fa-desktop text-4xl text-white"></i>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white">{APP_NAME} Deployment</h1>
          <p className="text-slate-400 text-lg">গুগলের সিকিউরিটি পলিসির কারণে এটি ব্রাউজার উইন্ডোর ভেতর সরাসরি কাজ করবে না। নিচে দেওয়া নিয়মগুলো অনুসরণ করুন।</p>
        </header>

        {/* Option 1: Electron */}
        <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 transition-colors">
          <div className="flex items-start gap-6">
            <div className="bg-blue-500/10 p-4 rounded-2xl">
              <i className="fab fa-js text-3xl text-blue-400"></i>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                Option 1: Electron Desktop App
                <span className="text-[10px] bg-blue-500 px-2 py-0.5 rounded-full uppercase">Recommended</span>
              </h2>
              <p className="text-slate-400 leading-relaxed">
                আপনার পিসিতে একটি পার্সোনাল সফটওয়্যার হিসেবে এটি চালানোর জন্য:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-slate-300">
                <li>আপনার কম্পিউটারে <code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300">Node.js</code> ইন্সটল থাকতে হবে।</li>
                <li>প্রজেক্ট ফোল্ডারে গিয়ে টার্মিনালে লিখুন: <code className="bg-slate-800 px-2 py-1 rounded text-green-400">npm install electron</code></li>
                <li>এরপর চালু করতে লিখুন: <code className="bg-slate-800 px-2 py-1 rounded text-green-400">npm run start:electron</code></li>
              </ol>
            </div>
          </div>
        </section>

        {/* Option 2: Chrome Extension */}
        <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-orange-500/50 transition-colors">
          <div className="flex items-start gap-6">
            <div className="bg-orange-500/10 p-4 rounded-2xl">
              <i className="fab fa-chrome text-3xl text-orange-400"></i>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Option 2: Chrome Extension</h2>
              <p className="text-slate-400 leading-relaxed">
                ব্রাউজারের ভেতরে একটি পপআপ উইন্ডো হিসেবে ব্যবহার করতে:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
                <li>ক্রোম ব্রাউজারে <code className="bg-slate-800 px-1.5 py-0.5 rounded">chrome://extensions/</code> লিঙ্কে যান।</li>
                <li>ডান দিকে <span className="text-white font-semibold underline">Developer Mode</span> অন করুন।</li>
                <li><span className="text-white font-semibold italic">Load Unpacked</span> বাটনে ক্লিক করে আপনার এই প্রজেক্ট ফোল্ডারটি সিলেক্ট করুন।</li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="text-center pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-xs">
            Created for <span className="text-blue-400">Secure AI Distraction-Free Browsing</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;

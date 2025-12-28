
import React, { useEffect, useRef } from 'react';

interface WebViewProps {
  url: string;
  onLoad: () => void;
}

export const WebView: React.FC<WebViewProps> = ({ url, onLoad }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Sometimes iframes don't trigger onLoad correctly if they are blocked or slow.
      // We trigger it after a delay as a fallback for the loading screen.
      onLoad();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoad]);

  return (
    <iframe
      ref={iframeRef}
      src={url}
      onLoad={onLoad}
      title="Content Viewer"
      className="w-full h-full bg-white"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; camera; microphone; geolocation"
      sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads allow-presentation"
    />
  );
};

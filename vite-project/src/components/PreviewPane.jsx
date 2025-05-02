// PreviewPane.jsx
import React, { useEffect, useRef } from 'react';

const PreviewPane = ({ html, css }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const doc = iframeRef.current.contentDocument;
    doc.open();
    doc.write(`<style>${css}</style>${html}`);
    doc.close();
  }, [html, css]);

  return (
    <iframe
      ref={iframeRef}
      style={{ width: '100%', height: '400px', border: 'none' }}
      title="Preview"
    />
  );
};

export default PreviewPane;

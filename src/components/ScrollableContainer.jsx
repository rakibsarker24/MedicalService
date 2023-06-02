import React, { useEffect, useRef } from 'react';

const ScrollableContainer = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const containerElement = containerRef.current;
    containerElement.scrollTop = containerElement.scrollHeight;
  }, [children]);

  return (
    <div ref={containerRef} style={{ overflowY: 'scroll', height: '300px' }}>
      {children}
    </div>
  );
};

export default ScrollableContainer;
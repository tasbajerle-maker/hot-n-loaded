import React from 'react';
import './StoryContainer.css';

// The component receives a prop to know if scrolling should be disabled
function StoryContainer({ children, isScrollingDisabled }) {
  // It adds the 'scrolling-disabled' class when the prop is true
  return (
    <div className={`story-container ${isScrollingDisabled ? 'scrolling-disabled' : ''}`}>
      {children}
    </div>
  );
}

export default StoryContainer;


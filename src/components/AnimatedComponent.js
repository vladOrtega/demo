// src/components/AnimatedComponent.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const AnimatedComponent = () => {
  useEffect(() => {
    gsap.to(".box", { rotation: 360, duration: 2 });
  }, []);

  return (
    <div className="box" style={{ width: 100, height: 100, backgroundColor: 'red' }}>
      Animate me!
    </div>
  );
};

export default AnimatedComponent;
